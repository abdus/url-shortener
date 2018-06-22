var express = require('express');
var router = express.Router();

var urlSchema = require('../db/url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', (req, res) => {
  urlSchema.find({}, (err, data) => {
    if (err) throw err;
    res.render('index', {data: data});
    console.log(data);
  });
});

module.exports = router;
