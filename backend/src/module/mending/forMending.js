const {Router} = require('express')
const forMendingRouter = Router()
const enumItems = require('./enums/forMending')
const forMendingService = require('./forMending.service')

forMendingRouter.get('/all', async(req, res) => {
    const forMendingAll = await forMendingService.get()
    res.json(forMendingAll)
})

forMendingRouter.get('/:id', async (req, res) => {
    const forMendingItem = await forMendingService.getItem(req.params.id)
    res.json({...forMendingItem._doc, typePage: enumItems.typePage})
})

module.exports = forMendingRouter