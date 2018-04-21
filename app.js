'use strict'

const express = require('express');
const app = express();

const mongoClient = require('mongodb').MongoClient;
const dbURL = 'mongodb://localhost/url-list';

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// User-defined modules 
const homePage = require('./routes/home');

app.use(express.static('public'));
app.use('/', homePage);


app.get('/:id', (req, res) => {
    
    let query = {};
    
    mongoClient.connect(dbURL, (err, db) => {
        if (err) throw err;
        query['short_url'] = req.params.id;


        let dbo = db.db('url-list');
        dbo.collection('urls').findOne(query, (err, data) => {
            if (err) throw err;
            if (data != null) {
                res.redirect(data.url);
            } else {
                res.end();
            }
        })
    })
})



app.listen(process.argv[2], () => {
    console.log("Listening to ", process.argv[2]);
});