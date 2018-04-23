const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const addData2DB = require('/home/abdus/Desktop/url-shorten/db/add.js')

// middleware 
router.use(bodyParser.urlencoded({ extended: false}));

router.get('/', (req, res) => {
    res.render('index');
});

// Env variable for user data 
let urlData = {}, userData = {}, shortURL = "RfYgEt";
router.post('/', (req, res) => {

    urlData['userURL'] = req.body.url2shorten;
    urlData['shortURL'] = shortURL;

    userData['userName'] = req.body.username;
    userData['userEmail'] = req.body.useremail;

    //add to DB 
    addData2DB(urlData, userData);

    res.end();
})
module.exports = router;