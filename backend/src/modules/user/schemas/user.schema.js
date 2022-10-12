import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
})

export default mongoose.model('user', User)