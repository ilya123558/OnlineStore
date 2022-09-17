const express = require('express')
const app = express()
const cors = require('cors')
const { dataRoastedСoffee, dataRoastedСoffeeDiscount, allDataRoastedСoffee } = require('./src/module/roasted-coffe/roastedСoffee.js')
const { allDataTeaAndCoffee } = require('./src/module/tea-and-coffe/teaAndCoffee.js')
const { allDataForMending } = require('./src/module/mending/forMending')
const { allDataHealthyEating } = require('./src/module/healthy-eating/healthyEating')



const PORT = 5000

app.use(cors({
    origin: '*'
}))



app.get('/api/roasted/', (req, res) => {
    res.json(dataRoastedСoffee)
})

app.get('/api/roasted/discount', (req, res) => {
    res.json(dataRoastedСoffeeDiscount)
})

app.get('/api/roasted/all', (req, res) => {
    res.json(allDataRoastedСoffee)
})

app.get('/api/tea-and-coffee/all', (req, res) => {
    res.json(allDataTeaAndCoffee)
})

app.get('/api/for-mending/all', (req, res) => {
    res.json(allDataForMending)
})

app.get('/api/healthy-eating/all', (req, res) => {
    res.json(allDataHealthyEating)
})



app.get('/api/roasted/:id', (req, res) => {
    res.json({...allDataRoastedСoffee.find(elem => elem.id == req.params.id), typePage: 'Свежеобжаренный кофе'})
})

app.get('/api/tea-and-coffee/:id', (req, res) => {
    res.json({...allDataTeaAndCoffee.find(elem => elem.id == req.params.id), typePage: 'Чай и кофейные напитки'})
})

app.get('/api/for-mending/:id', (req, res) => {
    res.json({...allDataForMending.find(elem => elem.id == req.params.id), typePage: 'Продукция для вендинга'})
})

app.get('/api/healthy-eating/:id', (req, res) => {
    res.json({...allDataHealthyEating.find(elem => elem.id == req.params.id), typePage: 'Здоровое питание'})
})



app.listen(PORT, () => {
    console.log(`server started in PORT ${PORT}`)
}) 