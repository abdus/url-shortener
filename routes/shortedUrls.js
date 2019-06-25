const express = require('express');
const router = express.Router();

const urlSchema = require('../db/url');

/* GET home page. */
let urlArr = [];
router.get('/', (req, res) => {
  urlSchema.find({}, (err, data) => {
    for (let i in data) {
      urlArr[i] = {};
      urlArr[i].shortURL = req.hostname + '/' + data[i].shortURL;
      urlArr[i].longURL = data[i].longURL;
      urlArr[i].slno = +i + 1;
    }
    return res.render('shortedurls', { data: urlArr });
  });
});

module.exports = router;
