import mongoose from 'mongoose'

const Basket = new mongoose.Schema({
    id: Number,
    userId: String,
    typePage: String,
    imgSrc: String,
    title: String,
    subtitle: String,
    grammar: Number,
    price: Number,
    amount: Number,
    discount: Number,
})

export default mongoose.model('basket', Basket)