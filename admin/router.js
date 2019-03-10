const auth = require('./auth');
const news = require('./news');
const admin = require('express').Router();

admin.use('/news', news);
admin.use('/auth', auth);

module.exports = admin;
