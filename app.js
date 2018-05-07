const app = require('express')();
const pug = require('pug')
const PORT = process.env.PORT || 4000


//routes 
const homeRoute = require('./routes/home.js');
const shortURLs = require('./routes/shorturl.js');


//view engine setup
app.set('view engine', 'pug');


//using routes 
app.use('/', homeRoute);
app.use('/shorturls', shortURLs);



// port
app.listen(PORT, () => {
    console.log('Listening to ', PORT);
});