const auth = require('./auth');
const news = require('./news');
const books = require('./books');
const teachers = require('./teachers');
const admin = require('express').Router();

admin.use('/news', news);
admin.use('/auth', auth);
admin.use('/books', books);
admin.use('/teachers', teachers);
module.exports = admin;
