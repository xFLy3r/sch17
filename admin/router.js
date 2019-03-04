const auth = require('./auth');
const news = require('./news');
const myApi = require('express').Router();

myApi.use('/news', news);
myApi.use('/auth', auth);

module.exports = myApi;
