const newsApi = require("./news");
const scheduleApi = require("./schedule");
const teachersApi = require("./teachers");
const booksApi = require("./books");

const api = [
	newsApi,
	scheduleApi,
	teachersApi,
	booksApi,
];

module.exports = api;