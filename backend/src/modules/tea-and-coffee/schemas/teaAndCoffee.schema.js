import mongoose from "mongoose"

const TeaAndCoffee = new mongoose.Schema({
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

export default mongoose.model('teaAndCoffee', TeaAndCoffee)