'use strict'

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// User-defined modules 
const homePage = require('./routes/home')

app.use(express.static('public'));
app.use('/', homePage);

app.listen(4000, () => {
    console.log("Listening to 4000");
});