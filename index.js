const express = require('express');
app = new express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('app started');
    app.get('/', (req,res) => {
        res.render('index');
    })
})