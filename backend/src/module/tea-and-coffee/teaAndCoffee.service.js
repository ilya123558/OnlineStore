const TeaAndCoffee = require('../../schema/teaAndCoffee')

class TeaAndCoffeeService {

    async get() {
        return await TeaAndCoffee.find()
    }

    async getItem(id) {
        return await TeaAndCoffee.findOne({ id })
    }
}

module.exports = new TeaAndCoffeeService