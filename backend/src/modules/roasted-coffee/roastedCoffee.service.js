import Roasted from './schemas/roastedCoffee.schema.js'
import enumItems from './enums/roastedCoffee.js'

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

export default new RoastedCoffeeService