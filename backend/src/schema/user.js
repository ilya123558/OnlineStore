const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
})

module.exports = mongoose.model('user', User)