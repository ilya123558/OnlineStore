import mongoose from 'mongoose'

const RoastedCoffee = new mongoose.Schema({
        num: Number,
        reviews: Number,
        acidicLvl: Number,
        bitterLvl: Number,
        saturatedLvl: Number,
        title: String,
        subtitle: String,
        toastingLvl: Number,
        id: Number,
        listOptions: [mongoose.Schema.Types.Mixed],
        geography: String,
        special: String,
        typeOfCoffee: String,
        imgSrc: String,
        imgFull: String,
        description: String,
        typePage: String

})

export default mongoose.model('roastedCoffee', RoastedCoffee)