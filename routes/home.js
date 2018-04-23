const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoCli = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost/db-url'

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

    mongoCli.connect(dbURL, (err, cli) => {
        if (err) throw err;

        let dbURLCol = cli.db('db-url').collection('urls');
        let dbUserCol = cli.db('db-url').collection('users');
        
        dbURLCol.insertOne(urlData, (err) => {
            if (err) throw err;
        });

        dbUserCol.insertOne(userData, (err) => {
            if (err) throw err;
        })
    })

    res.end();
})
module.exports = router;