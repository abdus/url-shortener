const app = require('express')();
const pug = require('pug')

app.set('view engine', 'pug');
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000);