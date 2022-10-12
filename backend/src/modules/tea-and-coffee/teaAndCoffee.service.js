import TeaAndCoffee from './schemas/teaAndCoffee.schema.js'

class TeaAndCoffeeService {

    async get() {

        return await TeaAndCoffee.find()
    }

    async getItem(id) {

        return await TeaAndCoffee.findOne({ id })
    }
}

export default new TeaAndCoffeeService