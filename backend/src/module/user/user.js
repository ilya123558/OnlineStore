const { Router } = require('express')
const userRouter = Router()
const userService = require('./user.service')


userRouter.get('/', async (req, res) => {
    const user = await userService.get(req.query)
    res.json(user)
})

userRouter.get('/:id', async (req, res) => {
    const user = await userService.getById(req.params.id)
    res.json(user)
})

userRouter.get('/check', async (req, res) => {
    const userCheck = await userService.check(req.query)
    res.json(userCheck)
})

userRouter.post('/', async (req, res) => {
    const userCreate = await userService.post(req.query)
    res.json(userCreate)
})

userRouter.put('/', async (req, res) => {
    const userUpdate = await userService.put(req.query)
    res.json(userUpdate)
})

userRouter.put('/all', async (req, res) => {
    const userUpdate = await userService.putAll(req.query)
    res.json(userUpdate)
})



module.exports = userRouter