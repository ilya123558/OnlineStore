import ForMending from './schemas/forMending.schema.js'

class ForMendingService {

    async get() {
        
        return await ForMending.find()
    }

    async getItem(id) {

        return await ForMending.findOne({ id })
    }
}

export default new ForMendingService