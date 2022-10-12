import HealthyEating from './schemas/healthyEating.schema.js'

class HealthyEatingService {

    async get() {

        return await HealthyEating.find()
    }

    async getItem(id) {
        
        return await HealthyEating.findOne({ id })
    }
}

export default new HealthyEatingService