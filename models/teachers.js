const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teachersSchema = new Schema({
	name: String,
	subject: String
});

module.exports = mongoose.model("Teacher", teachersSchema);