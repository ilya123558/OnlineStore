const { Router } = require('express')
const roastedRouter = Router()
const roastedCoffeeService = require('./roastedCoffee.service')
const enumItems = require('./enums/roastedCoffee')


roastedRouter.get('/discount', async (req, res) => {
    const roastedCoffeeDiscount = await roastedCoffeeService.getDiscount()
    res.json(roastedCoffeeDiscount)
})

roastedRouter.get('/all', async (req, res) => {
    const roastedCoffeeAll = await roastedCoffeeService.get()
    res.json(roastedCoffeeAll)
})

roastedRouter.get('/:id', async (req, res) => {
    const roastedCoffeeItem = await roastedCoffeeService.getItem(req.params.id)
    res.json({ ...roastedCoffeeItem._doc, typePage: enumItems.typePage })
})


module.exports = roastedRouter

