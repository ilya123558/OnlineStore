import User from './schemas/user.schema.js'

class UserService {

    async findByCredentials(props) {

        return await User.findOne({ email: props.email, password: props.password })
    }

    async findById(_id) {

        return await User.findOne({ _id })
    }

    async checkEmail(props) {
        const checkEmail = await User.findOne({ email: props.email })

        return checkEmail ? {} : { error: 'Аккаунта с таким email не существует' }
    }

    async create(props) {

        const check = await User.findOne({ email: props.email })

        return check ? { error: 'Аккаунт с таким email уже существует' } :
            await User.create({
                name: props.name,
                email: props.email,
                phone: props.phone,
                password: props.password,
            })
    }

    async updatePassword(props) {

        return await User.findOneAndUpdate({ email: props.email }, { password: props.password })
    }

    async updateById(props) {

        return await User.findOneAndUpdate({ _id: props._id }, {
            name: props.name,
            email: props.email,
            phone: props.phone,
            password: props.password,
        })
    }
}

export default new UserService