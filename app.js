const app = require('express')();
const pug = require('pug')
const PORT = process.env.PORT || 3000


//routes 
const homeRoute = require('./routes/home.js')


//view engine setup
app.set('view engine', 'pug');


//using routes 
app.use('/', homeRoute);


// port
app.listen(PORT, () => {
    console.log('Listening to ', PORT);
});