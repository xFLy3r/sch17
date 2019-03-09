const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  title: String,
  message: String,
  date: Date
});

module.exports = mongoose.model('Schedule', scheduleSchema);