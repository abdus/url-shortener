var express = require('express');
var router = express.Router();

var urlSchema = require('../db/url');
var randWord = require('../rand_word/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/', (req, res) => {
  let shortWORD = randWord();
  let urlData = new urlSchema({
    longURL: req.body.urlLONG,
    shortURL: shortWORD
  });
  urlData.save((err, data) => {
    if (err) throw err;
    return res.render('index', {data: 'Your shortlink has been created. You can find it here: https://' + req.hostname + '/' + shortWORD });
  });
});

/*  GET about page */
router.get('/about', (req, res) => {
  return res.render('about');
});

/*  GET contribute page */
router.get('/contribute', (req, res) => {
  return res.render('contribute');
});


module.exports = router;
