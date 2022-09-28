const Basket = require('../../schema/basket')

class BasketService {

    async get() {
        return await Basket.find()
    }

    async post(props) {
        return Basket.create({
            id: props.id,
            typePage: props.typePage,
            imgSrc: props.imgSrc,
            title: props.title,
            subtitle: props.subtitle,
            grammar: props.grammar,
            price: props.price,
            amount: props.amount,
            discount: props.discount,
        })
    }

    async put(id, typePage, grammar, amount) {
        const item = await Basket.findOne({ id, typePage, grammar })
        const itemUpdate = await Basket.findOneAndUpdate({ id, typePage, grammar }, { amount: Number(item.amount) + Number(amount) })
        return itemUpdate
    }

    async delete(_id) {
        return await Basket.findOneAndDelete({ _id })
    }

    async deleteAll() {
        return await Basket.deleteMany()
    }

    async putAmount(_id, amount) {
        await Basket.findOneAndUpdate({ _id }, { amount })
    }
}

module.exports = new BasketService