const { Router } = require('express')
const basketRouter = Router()
const basketService = require('./basket.service')


basketRouter.get('/', async (req, res) => {
    const basketAll = await basketService.get(req.query.userId)
    res.json(basketAll)
})

basketRouter.get('/all-price', async (req, res) => {
    const basketPriceInfo = await basketService.getAllPrice(req.query.userId)
    res.json(basketPriceInfo)
})

basketRouter.post('/', async (req, res) => {
    const basketPost = await basketService.post(req.query)
    res.json(basketPost)
})

basketRouter.put('/', async (req, res) => {
    const basketPut = await basketService.put(req.query)
    res.json(basketPut)
})

basketRouter.put('/amount', async (req, res) => {
    const basketPut = await basketService.putAmount(req.query)
    res.json(basketPut)
})

basketRouter.delete('/', async (req, res) => {
    const basketDelete = await basketService.delete(req.query)
    res.json(basketDelete)
})

basketRouter.delete('/all', async (req, res) => {
    const basketDeleteAll = await basketService.deleteAll(req.query.userId)
    res.json(basketDeleteAll)
})



module.exports = basketRouter

