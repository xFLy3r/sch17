const express = require('express');
var router = express();
const News = require('../models/news');

router.route('/')
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {
    News.find({}, '-__v', (err, news) => res.send({ news: news }));
  });

module.exports = router;

