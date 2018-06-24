var express = require('express');
var router = express.Router();

var urlSchema = require('../db/url');

/* GET req for redirecting shorted URLS  */
router.get('/:id', (req, res) => {
  urlSchema.findOne({shortURL: req.params.id}, (err, data) => {
    if (data === null) return res.render('error');
    if (err)  res.render('index', {errorMsg: 'Something Went Wrong. Don\'t worry, It\'s on Server'});
    data = JSON.parse(JSON.stringify(data));
    res.redirect(data.longURL);
  });
});

module.exports = router;
