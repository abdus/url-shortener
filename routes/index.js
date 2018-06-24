var express = require('express');
var router = express.Router();

var urlSchema = require('../db/url');
var randWord = require('../rand_word/index')();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/', (req, res) => {
  let urlData = new urlSchema({
    longURL: req.body.urlLONG,
    shortURL: randWord
  });
  urlData.save((err, data) => {
    if (err) throw err;
    return res.render('index', {data: 'Your shortlink has been created. You can find it here: https://' + req.hostname + '/' + randWord });
  });
});

router.get('/:id', (req, res) => {
  urlSchema.findOne({shortURL: req.params.id}, (err, data) => {
    console.log(data);
    if (data === null) return res.render('index', {errorMsg: 'No URL found. Double Check the URL you Entered'});
    if (err)  res.render('index', {errorMsg: 'Something Went Wrong. Don\'t worry, It\'s on Server'});
    data = JSON.parse(JSON.stringify(data));
    res.redirect(data.longURL);
  });
});

module.exports = router;
