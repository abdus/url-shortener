var express = require('express');
var router = express.Router();

var urlSchema = require('../db/url');
var randWord = require('../rand_word/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
let data2pass = null;
router.post('/', (req, res) => {
  let shortURL = randWord();
  console.log(isAvailable(shortURL));
  res.render('index', {data: req.body.urlLONG});
});

module.exports = router;


const isAvailable = (shortURL) => {
  urlSchema.findOne({'urlSHORT': shortURL})
    .exec((err,data) => {
    return data;
  });
};