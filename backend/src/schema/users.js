const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    userName: String,
    password: String
})

module.exports = mongoose.model('users', Users)