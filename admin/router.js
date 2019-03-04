const auth = require("./auth");
const news = require("./news");
const admin = [
	auth,
	news
];

module.exports = admin;