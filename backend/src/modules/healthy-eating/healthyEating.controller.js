import { Router } from 'express'

import healthyEatingService from './healthyEating.service.js'
import enumItems from './enums/healthyEating.js'

const healthyEatingRouter = Router()

healthyEatingRouter.get('/all', async (req, res) => {
    const healthyEatingAll = await healthyEatingService.get()
    res.json(healthyEatingAll)
})

healthyEatingRouter.get('/:id', async (req, res) => {
    const healthyEatingItem = await healthyEatingService.getItem(req.params.id)
    res.json({ ...healthyEatingItem._doc, typePage: enumItems.typePage })
})

export default healthyEatingRouter