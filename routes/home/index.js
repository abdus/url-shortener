const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost/url-list'

// custom modules
const urlGenerator = require('/home/abdus/Desktop/url-shorten/user_modules/urlgenerator/');
let shortURL = urlGenerator();

router.get('/', (req, res) => {
    res.end();
});

let query = {};
router.post('/', (req, res) => {
    query['short_url'] = req.body.url2shorten;

    mongoClient.connect(dbURL, (err, db) => {
        if (err) throw err;


        let dbo = db.db('url-list');
        dbo.collection('urls').findOne(query, (err, data) => {
            if (err) throw err;
            if (data == null) {

                let insertQuery = {};
                
                insertQuery['url'] = req.body.url2shorten;
                insertQuery['short_url'] = shortURL;
                
                dbo.collection('urls').insertOne(insertQuery, (err) => {
                    if (err) throw err;
                    console.log("Data Entered");
                    console.log("Short URL is ", shortURL);
                })
            }
        })
    })
    res.send("<h1>Your Short URL is http://localhost:" + process.argv[2] + "/" + shortURL + "</h1>")

});
module.exports = router;