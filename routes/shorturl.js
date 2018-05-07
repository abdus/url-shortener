const express = require('express');
const Router = express.Router();

Router.get('/shorturls', (req, res) => {
    res.send("Working");
    res.end();
})

module.exports = Router;