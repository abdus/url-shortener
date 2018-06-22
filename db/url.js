var config = require('./__config.json');
var mongoose = require('mongoose');
mongoose.connect('mongodb://' + config.userName + ':' + config.password + '@ds163700.mlab.com:63700/url-shorten');
var Schema = mongoose.Schema;

var urlSchema = Schema({
    longURL: String,
    shortURL: String
});

module.exports = mongoose.model('urlColl', urlSchema);