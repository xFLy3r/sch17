const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
	title: String,
	message: String,
	date: Date
});

module.exports = mongoose.model("News", newsSchema);