const { Router } = require('express')
const basketRouter = Router()
const basketService = require('./basket.service')


basketRouter.get('/', async (req, res) => {
    const basketAll = await basketService.get()
    res.json(basketAll)
})

basketRouter.post('/', async (req, res) => {
    const basketPost = await basketService.post(req.query)
    res.json(basketPost)
})

basketRouter.put('/', async (req, res) => {
    const basketPut = await basketService.put(req.query.id, req.query.typePage, req.query.grammar, req.query.amount)
    res.json(basketPut)
})

basketRouter.delete('/', async (req, res) => {
    const basketDelete = await basketService.delete(req.query.id)
    res.json(basketDelete)
})

basketRouter.delete('/all', async (req, res) => {
    const basketDeleteAll = await basketService.deleteAll()
    res.json(basketDeleteAll)
})

basketRouter.put('/amount', async (req, res) => {
    const basketPut = await basketService.putAmount(req.query._id, req.query.amount)
    res.json(basketPut)
})

module.exports = basketRouter

