const newsApi = require('./news');
const scheduleApi = require('./schedule');
const teachersApi = require('./teachers');
const booksApi = require('./books');
const api = require('express').Router();

api.use('/news', newsApi);
api.use('/schedule', scheduleApi);
api.use('/teachers', teachersApi);
api.use('/books', booksApi);

module.exports = api;