var express = require('express');
var router = express.Router();

var urlSchema = require('../db/url');

/* GET home page. */
let urlArr = [];
router.get('/', (req, res) => {
    urlSchema.find({}, (err, data) => {
        for (let i in data) {
            urlArr[i] = {};
            urlArr[i].shortURL = req.hostname + '/' + data[i].shortURL;
            urlArr[i].longURL = data[i].longURL;
        }
        console.log(urlArr);
        return res.render('shortedurls', {data: urlArr});
    });
});


module.exports = router;
