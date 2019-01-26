const express = require('express');
var router = express.Router();
const News = require('../models/news');

router.get('/', (req, res) => {
    News.find({}, (err, news) => res.send({ news: news }));
});

router.post('/', (req, res) => {
    let news = new News(req.body);
    news.save();
    res.send(201, { news: news })
});

module.exports = router.use('/news', router);