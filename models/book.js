const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    sourcePath: String,
    imagePath: String
});

module.exports = mongoose.model('Book', bookSchema);