const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false}));

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})
module.exports = router;