const express = require('express');
var router = express.Router();
const News = require('../models/news');

router.route('/news')
  .all((req, res, next) => {
      next();
  })
  .get('/', (req, res) => {
      News.find({}, (err, news) => res.send({ news: news }));
  });

module.exports = router;

// TODO: make idempotent requests(except DELETE)
