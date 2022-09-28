const HealthyEating = require('../../schema/healthyEating')

class HealthyEatingService {

    async get() {
        return await HealthyEating.find()
    }

    async getItem(id) {
        return await HealthyEating.findOne({ id })
    }
}

module.exports = new HealthyEatingService