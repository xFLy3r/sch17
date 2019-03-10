const auth = require('./auth');
const news = require('./news');
const books = require('./books');
const admin = require('express').Router();

admin.use('/news', news);
admin.use('/auth', auth);
admin.use('/books', books);
module.exports = admin;
