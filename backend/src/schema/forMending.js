const mongoose = require('mongoose')

const ForMending = new mongoose.Schema({
    num: Number,
    reviews: Number,
    title: String,
    typeProduct: String,
    id: Number,
    listOptions: [mongoose.Schema.Types.Mixed],
    activeListOptions: Number,
    imgSrc: String,
    imgFull: String,
    description: String,
    typePage: String
})

module.exports = mongoose.model('forMending', ForMending)