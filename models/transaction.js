const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user: String,
    year: Number,
    month: Number,
    day: Number,
    merchant: String,
    category: String,
    amount: Number,
});

const transaction = mongoose.model('transaction', transactionSchema);
module.exports = transaction;