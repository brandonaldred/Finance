const express = require('express');
app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/love_the_loot', {useNewUrlParser: true});

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('app started');

    app.get('/', (req,res) => {
        res.render('index');
    });

    app.post('/', (req, res) => {
        console.log(req.body);
    });

});