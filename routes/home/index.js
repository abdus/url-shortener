const express = require('express');
const router = express.Router();

// custom modules
const urlGenerator = require('/home/abdus/Desktop/url-shorten/user_modules/urlgenerator/')();

router.get('/', (req, res) => {
    res.end();
});

let url;
router.post('/', (req, res) => {
    url = req.body.url2shorten;
    res.end();
});
module.exports = router;