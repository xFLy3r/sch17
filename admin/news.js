const express = require('express');
var router = express();
const News = require('../models/news');


router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    News.find({}, '-__v', (err, news) => res.send({ news: news }));
  })
  .post((req, res) => {
      let news = new News(req.body);
      news.save();
      res.status(201).send(news)
  });

router.param('newsId', (req, res, next, id) => {
  News.findById(id, '-__v', (err, news) => {
    req.news = news;
    if (err) {
      res.status(404).send({ message: 'Not found' });
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
    // data['news'].forEach((item) => {
    //   if (item.date == req.body.date) {
    //     if (item.title === req.body.title) {
    //       item.title = req.body.newTitle;
    //     } else if (item.text === req.body.text) {
    //       item.text = req.body.newText;
    //     }
    //     res.status(200).send({"status": "OK"});
    //   }
    // });
    // res.status(200).send({});
    // TODO: Finish this route
  })
  .delete((req, res, next) => {
    News.deleteOne({_id : req.news._id }, (err, res) => res.send({ 'message': 'Deleted!' }))
  });

module.exports = router;
