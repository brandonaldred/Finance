const mongoose = require('mongoose');
const transaction = require('./models/transaction');

mongoose.connect('mongodb://localhost/love_the_loot', {useNewUrlParser: true});

transaction.create({
    user: 'brandonaldred',
    year: 2021,
    month: 09,
    day: 06,
    merchant: 'halo',
    category: 'restaurant',
    amount: 32.15,
}, (error, transaction) => { console.log(error, transaction) });