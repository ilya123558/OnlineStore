import express from 'express'

import roastedRouter from './modules/roasted-coffee/roastedСoffee.controller.js'
import teaAndCoffeeRouter from './modules/tea-and-coffee/teaAndCoffee.controller.js'
import forMendingRouter from './modules/mending/forMending.controller.js'
import healthyEatingRouter from './modules/healthy-eating/healthyEating.controller.js'
import basketRouter from './modules/basket/basket.controller.js'
import userRouter from './modules/user/user.controller.js'
import searchRouter from './modules/search/search.controller.js'

const app = express()

app.use('/roasted', roastedRouter)
app.use('/tea-and-coffee', teaAndCoffeeRouter)
app.use('/for-mending', forMendingRouter)
app.use('/healthy-eating', healthyEatingRouter)
app.use('/basket', basketRouter)
app.use('/user', userRouter)
app.use('/search', searchRouter)

export default app