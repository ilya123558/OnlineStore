const Basket = require('../../schema/basket')

class BasketService {

    async get(userId) {
        return await Basket.find({ userId })
    }

    async getAllPrice(userId) {
        let basketPrice = 0
        let disc = 0
        const basketList = await Basket.find({ userId })
        for (let i in basketList) {
            basketPrice += basketList[i].price * basketList[i].amount
        }
        if (basketPrice >= 5000){
            disc = 10
        }
        if (basketPrice >= 7000){
            disc = 15
        }
        if (basketPrice >= 10000){
            disc = 20
        }
        
        return {
            sumPrice: basketPrice,
            discount: disc
        }
    }

    async post(props) {
        return Basket.create({
            id: props.id,
            userId: props.userId,
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

    async put(props) {
        const item = await Basket.findOne({
            id: props.id,
            typePage: props.typePage,
            grammar: props.grammar,
            userId: props.userId
        })
        const itemUpdate = await Basket.findOneAndUpdate({
            id: props.id,
            typePage: props.typePage,
            grammar: props.grammar,
            userId: props.userId
        }, { amount: Number(item.amount) + Number(props.amount) })
        return itemUpdate
    }

    async delete(props) {
        return await Basket.findOneAndDelete({ _id: props._id, userId: props.userId })
    }

    async deleteAll(userId) {
        return await Basket.deleteMany({ userId })
    }

    async putAmount(props) {
        await Basket.findOneAndUpdate({ _id: props._id, userId: props.userId }, { amount: props.amount })
    }
}

module.exports = new BasketService