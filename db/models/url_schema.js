const mongoose = require('mongoose');
const schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/db-url');

let urlSchema = new schema({
    "userURL": String,
    "shortURL": String,
    "userEmail": String,
    "userName": String
});

let urls = mongoose.model('urls', urlSchema);

module.exports = urls;
