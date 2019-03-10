const express = require('express');
var router = express();
const News = require('../models/news');

let getValidationErrors = (errors) => {
  let newErrors = [];
  for (let error in errors)
    newErrors.push(errors[error].message);
  return newErrors;
};

router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    News.find({}, '-__v', (err, news) => res.send({ news: news }));
  })
  .post((req, res) => {
      let news = new News(req.body);
      news.save((err) => {
        if (err) {
          res.status(422).send({ errors: getValidationErrors(err.errors)});
        } else {
          res.status(201).send(news);
        }
      });
  });

router.param('newsId', (req, res, next, id) => {
  News.findById(id, '-__v', (err, news) => { //TODO: FIX THIS
    if (err || !news) {
      res.status(404).send({ message: 'Not found' });
    } else {
      req.news = news;
    }
    next();
  });
});

router.route('/:newsId')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    res.send(req.news);
  })
  .put((req, res, next) => {
    let news = req.news;
    news.title = req.body.title;
    news.message = req.body.message;
    news.save((err) => {
      if (err) {
        res.status(422).send({ errors: getValidationErrors(err.errors)});
      } else {
        res.status(204).send({});
      }
    });
  })
  .delete((req, res, next) => {
    News.deleteOne({ _id: req.news._id }, (e, r) => {
      if (!e) {
        res.send({ message: `News with id ${req.news._id} was successfully deleted.` })
      } else {
        res.status(500).send({ message: 'Something went wrong.' })
      }
    })
  });

module.exports = router;
