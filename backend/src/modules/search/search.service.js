import ForMending from '../mending/schemas/forMending.schema.js'
import HealthyEating from '../healthy-eating/schemas/healthyEating.schema.js'
import Roasted from '../roasted-coffee/schemas/roastedCoffee.schema.js'
import TeaAndCoffee from '../tea-and-coffee/schemas/teaAndCoffee.schema.js'

class SerchService {

    async get(value) {
        const forMending = await ForMending.find({ title: { $regex: value } })
        const healthyEating = await HealthyEating.find({ title: { $regex: value } })
        const roasted = await Roasted.find({ title: { $regex: value } })
        const teaAndCoffee = await TeaAndCoffee.find({ title: { $regex: value } })
        
        return [...forMending, ...healthyEating, ...roasted, ...teaAndCoffee]
    }
}

export default new SerchService
