import express from 'express'
import cors from 'cors'
import router from './src/router.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 5000

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://user:00012500@onlinestore.v6sfh0r.mongodb.net/onlineStore')

        app.use(cors({ origin: '*' }))
        app.use(bodyParser.urlencoded({ extended: false }))

        app.use('/api', router)

        app.listen(PORT, () => {
            console.log(`server started in PORT ${PORT}`)
        })
    }
    catch (e) {
        console.log(e)
    }
}

start()