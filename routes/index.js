var express = require('express');
var router = express.Router();
var cors = require('cors');

var urlSchema = require('../db/url');
var randWord = require('../rand_word/index')();

/* GET home page. */
router.get('/', cors(), function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(200);
});

/* POST home page. */
router.post('/', (req, res) => {
  let urlData = new urlSchema({
    longURL: req.body.urlLONG,
    shortURL: randWord
  });
  urlData.save((err, data) => {
    if (err) throw err;
    return res.render('index', {data: 'Your shortlink has been created. You can find it here: https://localhost:3000/' + randWord });
  });
});

module.exports = router;
