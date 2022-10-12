import { Router } from 'express'

import enumItems from './enums/forMending.js'
import forMendingService from './forMending.service.js'

const forMendingRouter = Router()

forMendingRouter.get('/all', async (req, res) => {
    const forMendingAll = await forMendingService.get()
    res.json(forMendingAll)
})

forMendingRouter.get('/:id', async (req, res) => {
    const forMendingItem = await forMendingService.getItem(req.params.id)
    res.json({ ...forMendingItem._doc, typePage: enumItems.typePage })
})

export default forMendingRouter