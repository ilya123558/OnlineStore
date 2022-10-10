const ForMending = require('../../schema/forMending')
const HealthyEating = require('../../schema/healthyEating')
const Roasted = require('../../schema/roastedCoffee')
const TeaAndCoffee = require('../../schema/teaAndCoffee')

class SerchService {

    async get(value) {
        const forMending = await ForMending.find({ title: { $regex: value } })
        const healthyEating = await HealthyEating.find({ title: { $regex: value } })
        const roasted = await Roasted.find({ title: { $regex: value } })
        const teaAndCoffee = await TeaAndCoffee.find({ title: { $regex: value } })
        return [...forMending, ...healthyEating, ...roasted, ...teaAndCoffee]
    }
}

module.exports = new SerchService
