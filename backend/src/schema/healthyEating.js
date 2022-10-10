const mongoose = require('mongoose')

const HealthyEating = new mongoose.Schema(        {
    num: Number,
    reviews: Number,
    title: String,
    typeProduct: String,
    id: Number,
    listOptions: [mongoose.Schema.Types.Mixed],
    activeListOptions: Number,
    imgSrc : String,
    imgFull: String,
    typePage: String

})

module.exports = mongoose.model('healthyEating', HealthyEating)