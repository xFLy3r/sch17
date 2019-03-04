const express = require('express');
var router = express();
const News = require('../models/news');


router.route('/')
  .all((req, res, next) => {
    next();
  })
  .post((req, res) => {
    if (req.body.title === undefined || req.body.text === undefined || !isLogged) {
      res.sendStatus(500);
    } else if (isLogged) {
      let news = new News(req.body);
      news.save();
    }
  })
  .put((req, res) => {
    data['news'].forEach((item) => {
      if (item.date == req.body.date) {
        if (item.title === req.body.title) {
          item.title = req.body.newTitle;
        } else if (item.text === req.body.text) {
          item.text = req.body.newText;
        }
        res.status(200).send({"status": "OK"});
      }
    });
    res.status(200).send({});
  })
  .delete((req, res) => {
    // TODO: Finish this route
  });

module.exports = router;

// TODO: Finish routes