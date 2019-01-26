const newsApi = require('./news');
const scheduleApi = require('./schedule');
const teacherApi = require('./teacher');
const bookApi = require('./book');

const api = [
    newsApi,
    scheduleApi,
    teacherApi,
    bookApi,
];

module.exports = api;