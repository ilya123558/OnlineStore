const { Router } = require('express')
const serchService = require('./serch.service')
const serchRouter = Router()

serchRouter.get('/', (req, res) => {
    const serchItems = serchService.get(req.query.value)
    serchItems.then(data => res.json(data))
})

module.exports = serchRouter