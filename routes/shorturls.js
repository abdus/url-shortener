const express = require('express');
const bodyParser = require('body-parser');
const Router = express.Router();


// body-parser 
Router.use(bodyParser.urlencoded({ extended: false }));

// get req in '/'
Router.get('/shorturls', (req, res, next) => {
    res.render('index');
    // console.log(req.query);
    res.end();
    next();
});

// // post req in '/'
// Router.post('/', (req, res, next) => {
   
//     //Checking and adding to db
//     let shortURL = randURL();
//     let data = new urlModel({
//         "userURL": req.body.url2shorten,
//         "shortURL": shortURL,
//         "userEmail": req.body.useremail,
//         "userName": req.body.username
//     })
//     let url2send = 'localhost:4000/' + shortURL;
//     data.save((err) => {
//         if (err) throw err;
//         console.log("Saved")
//     })

//     res.render("shorted", {"url": url2send});
//     res.end();
//     next();
// })


module.exports = Router;