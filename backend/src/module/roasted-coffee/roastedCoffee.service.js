const Roasted = require('../../schema/roastedCoffee')
const enumItems = require('./enums/roastedCoffee')

class RoastedCoffeeService {

    async get() {
        return await Roasted.find()
    }

    async getDiscount() {
        return await Roasted.find({ special: enumItems.discount })
    }

    async getItem(id) {
        return await Roasted.findOne({ id })
    }
}

module.exports = new RoastedCoffeeService