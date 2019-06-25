const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const urlSchema = require('../db/url');
const randWord = require('../rand_word/index');

const csrfProtection = csrf({ cookie: true });

/* GET home page. */
router.get('/', csrfProtection, function(req, res, next) {
  res.render('index', { csrfToken: req.csrfToken() });
});

/* POST home page. */
router.post('/', csrfProtection, (req, res) => {
  if (isValidURL) {
    let shortWORD = randWord();
    let urlData = new urlSchema({
      longURL: req.body.urlLONG,
      shortURL: shortWORD,
    });
    urlData.save((err, data) => {
      if (err) return res.render('index', { errorMsg: err.message });
      return res.render('index', {
        data: 'https://' + req.hostname + '/' + shortWORD,
      });
    });
  } else {
    return res.render('index', { errorMsg: 'not a valid url' });
  }
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

const isValidURL = url => {
  let urlSplitted = url.split(':');
  let doesContainHTTP =
    urlSplitted[0] === 'https' || urlSplitted[0] === 'http' ? true : false;
  urlSplitted = url.split('.');
  let doesHaveAnExt = urlSplitted.length > 2 ? true : false;
  doesContainHTTP ? (doesHaveAnExt ? true : false) : false;
};
