const { db_string } = require('./config');
const mongoose = require('mongoose');
mongoose.connect(db_string);
// mongoose.connect('mongodb://127.0.0.1/url-shorten');
const Schema = mongoose.Schema;

const urlSchema = Schema({
  longURL: String,
  shortURL: String,
});

module.exports = mongoose.model('urls', urlSchema);
