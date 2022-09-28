const {Router} = require('express')
const healthyEatingRouter = Router()
const healthyEatingService = require('./healthyEating.service')
const enumItems = require('./enums/healthyEating')


healthyEatingRouter.get('/all', async(req, res) => {
    const healthyEatingAll = await healthyEatingService.get()
    res.json(healthyEatingAll)
})

healthyEatingRouter.get('/:id', async(req, res) => {
    const healthyEatingItem = await healthyEatingService.getItem(req.params.id)
    res.json({...healthyEatingItem._doc, typePage: enumItems.typePage })
})

module.exports = healthyEatingRouter