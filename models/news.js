const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: {
    type: String,
    required: [true, '"title" is required.']
  },
  message: {
    type: String,
    required: [true, '"message" is required.']
  },
  date: Date
});

module.exports = mongoose.model('News', newsSchema);