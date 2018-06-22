var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db-url');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
    longURL: String,
    shortURL: String
});

module.exports = mongoose.model('urls', urlSchema);