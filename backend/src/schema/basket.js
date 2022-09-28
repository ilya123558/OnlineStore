const mongoose = require('mongoose')

const Basket = new mongoose.Schema({
    id: Number,
    typePage: String,
    imgSrc: String,
    title: String,
    subtitle: String,
    grammar: Number,
    price: Number,
    amount: Number,
    discount: Number,
})

module.exports = mongoose.model('basket', Basket)