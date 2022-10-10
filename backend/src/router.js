const express = require('express')
const app = express()

const roastedRouter = require('./module/roasted-coffee/roastedСoffee')
const teaAndCoffeeRouter = require('./module/tea-and-coffee/teaAndCoffee')
const forMendingRouter = require('./module/mending/forMending')
const healthyEatingRouter = require('./module/healthy-eating/healthyEating')
const basketRouter = require('./module/basket/basket')
const userRouter = require('./module/user/user')
const serchRouter = require('./module/serch/serch')


app.use('/roasted', roastedRouter)
app.use('/tea-and-coffee', teaAndCoffeeRouter)
app.use('/for-mending', forMendingRouter)
app.use('/healthy-eating', healthyEatingRouter)
app.use('/basket', basketRouter)
app.use('/user', userRouter)
app.use('/serch', serchRouter)

module.exports = app