const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teachersSchema = new Schema({
	name: {
		type: String,
		required: [true, '"name" is required.']
	},
	subject: {
		type: String,
		required: [true, '"subject" is required.']
	}
});

module.exports = mongoose.model("Teacher", teachersSchema);