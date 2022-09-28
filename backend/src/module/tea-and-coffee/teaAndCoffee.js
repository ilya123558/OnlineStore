const {Router} = require('express')
const teaAndCoffeeRouter = Router()
const teaAndCoffeeService = require('./teaAndCoffee.service')

const enumItems = require('./enums/teaAndCoffee')

teaAndCoffeeRouter.get('/all', async (req, res) => {
    const teaAndCoffeeAll = await teaAndCoffeeService.get()
    res.json(teaAndCoffeeAll)
})

teaAndCoffeeRouter.get('/:id', async(req, res) => {
    const teaAndCoffeeItem = await teaAndCoffeeService.getItem(req.params.id)
    res.json({ ...teaAndCoffeeItem._doc, typePage: enumItems.typePage })
})

module.exports = teaAndCoffeeRouter