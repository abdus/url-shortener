const app = require('express')();
const pug = require('pug')
const PORT = process.env.PORT || 4000


//routes 
const homeRoute = require('./routes/home.js');
const shorturls = require('./routes/shorturls.js');


//view engine setup
app.set('view engine', 'pug');


//using routes 
app.all('/shorturls', (req, res) => {
    res.render("shorturls");
})
// app.use('/shorturls', shorturls)
app.use('/', homeRoute);




// port
app.listen(PORT, () => {
    console.log('Listening to ', PORT);
});