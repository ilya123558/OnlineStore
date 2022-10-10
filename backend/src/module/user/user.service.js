const User = require('../../schema/user')

class UserService {

    async get(props) {
        return await User.findOne({ email: props.email, password: props.password })
    }

    async getById(_id) {
        return await User.findOne({ _id })
    }

    async check(props) {
        const check = await User.findOne({ email: props.email })
        console.log(props.email)

        if (check) {
            return {}
        }
        else {
            return { error: 'Аккаунта с таким email не существует' }
        }
    }

    async post(props) {

        const check = await User.findOne({ email: props.email })

        if (check) {
            return { error: 'Аккаунт с таким email уже существует' }
        }
        else {
            return await User.create({
                name: props.name,
                email: props.email,
                phone: props.phone,
                password: props.password,
            })
        }
    }

    async put(props) {
        return await User.findOneAndUpdate({ email: props.email }, { password: props.password })
    }

    async putAll(props) {
        return await User.findOneAndUpdate({ _id: props._id }, {
            name: props.name,
            email: props.email,
            phone: props.phone,
            password: props.password,
        })
    }
}

module.exports = new UserService