const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./src/router')

const mongoose = require('mongoose');

const PORT = 5000

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://user:00012500@onlinestore.v6sfh0r.mongodb.net/onlineStore')

        app.use(cors({
            origin: '*'
        }))
        
        app.use(require('body-parser').urlencoded({ extended: false }))

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