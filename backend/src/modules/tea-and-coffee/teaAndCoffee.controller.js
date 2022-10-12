import { Router } from 'express'

import teaAndCoffeeService from './teaAndCoffee.service.js'
import enumItems from './enums/teaAndCoffee.js'

const teaAndCoffeeRouter = Router()

teaAndCoffeeRouter.get('/all', async (req, res) => {
    const teaAndCoffeeAll = await teaAndCoffeeService.get()
    res.json(teaAndCoffeeAll)
})

teaAndCoffeeRouter.get('/:id', async (req, res) => {
    const teaAndCoffeeItem = await teaAndCoffeeService.getItem(req.params.id)
    res.json({ ...teaAndCoffeeItem._doc, typePage: enumItems.typePage })
})

export default teaAndCoffeeRouter