const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
	title: {
		type: String,
		required: [true, '"title" is required.']
	},
	sourcePath: {
		type: String,
		required: [true, '"source path" is required.']
	},
	imagePath: {
		type: String,
		required: [true, '"image path" is required.']
	}
});

module.exports = mongoose.model("Books", booksSchema);