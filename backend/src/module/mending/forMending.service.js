const ForMending = require('../../schema/forMending')

class ForMendingService {

    async get() {
        return await ForMending.find()
    }

    async getItem(id) {
        return await ForMending.findOne({ id })
    }
}

module.exports = new ForMendingService