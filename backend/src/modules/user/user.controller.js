import { Router } from 'express'

import userService from './user.service.js'

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    const user = await userService.findByCredentials(req.query)
    res.json(user)
})

userRouter.get('/check', async (req, res) => {
    const userCheck = await userService.checkEmail(req.query)
    res.json(userCheck)
})

userRouter.get('/:id', async (req, res) => {
    const user = await userService.findById(req.params.id)
    res.json(user)
})

userRouter.post('/', async (req, res) => {
    const userCreate = await userService.create(req.query)
    res.json(userCreate)
})

userRouter.put('/', async (req, res) => {
    const userUpdate = await userService.updatePassword(req.query)
    res.json(userUpdate)
})

userRouter.put('/all', async (req, res) => {
    const userUpdate = await userService.updateById(req.query)
    res.json(userUpdate)
})


export default userRouter