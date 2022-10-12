import { Router } from 'express'

import searchService from './search.service.js'

const searchRouter = Router()

searchRouter.get('/', (req, res) => {
    const searchItems = searchService.get(req.query.value)
    searchItems.then(data => res.json(data))
})

export default searchRouter