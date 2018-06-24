var express = require('express');
var router = express.Router();
const csrf = require('csurf');

var urlSchema = require('../db/url');
var randWord = require('../rand_word/index');

var csrfProtection = csrf({ cookie: true });

/* GET home page. */
router.get('/', csrfProtection, function(req, res, next) {
  res.render('index', { csrfToken: req.csrfToken() });
});

/* POST home page. */
router.post('/', csrfProtection, (req, res) => {
  let shortWORD = randWord();
  let urlData = new urlSchema({
    longURL: req.body.urlLONG,
    shortURL: shortWORD
  });
  urlData.save((err, data) => {
    if (err) throw err;
    return res.render('index', {data: 'https://' + req.hostname + '/' + shortWORD });
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
