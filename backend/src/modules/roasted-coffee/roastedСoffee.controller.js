import { Router } from 'express'

import roastedCoffeeService from './roastedCoffee.service.js'
import enumItems from './enums/roastedCoffee.js'

const roastedRouter = Router()

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


export default roastedRouter

