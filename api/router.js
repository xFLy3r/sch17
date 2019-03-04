const newsApi = require('./news');
const scheduleApi = require('./schedule');
const teachersApi = require('./teachers');
const booksApi = require('./books');
const myApi = require('express').Router();

myApi.use('/news', newsApi);
myApi.use('/schedule', teachersApi);
myApi.use('/teachers', teachersApi);
myApi.use('/books', booksApi);

module.exports = myApi;