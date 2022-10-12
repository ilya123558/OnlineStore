import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchLogin = createAsyncThunk(
    'users/fetchLogin',
    async (props) => {
        try {
            const response = await axios({
                method: 'GET',
                url: `http://localhost:5000/api/user/`,
                params: {
                    email: props.email,
                    password: props.password
                }
            })
            const data = await response.data
            return data

        } catch (error) {
            return new Error(error.message)
        }

    }
)


const initialState = {
    status: 'loading',
    error: '',
    login: [
        { title: 'Email', value: '', placeholder: 'Email', type: 'email' },
        { title: 'Password', value: '', placeholder: 'Введите пароль', type: 'password' },
    ],
}

const login = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateLoginValue: (state, action) => {
            state.login = state.login.map(elem => elem.title === action.payload.title
                ?
                { ...elem, value: action.payload.value }
                :
                elem)
        },
        updateLoginTypePassword: (state, action) => {
            state.login = state.login.map(elem => elem.title === 'Password'
                ?
                { ...elem, type: action.payload.type }
                :
                elem)
        },
        updateLoginStatus: (state, action) => {
            state.status = action.payload
        },
        resetLoginValue: (state, action) => {
            state.login = state.login.map(elem => ({...elem, value: ''}))
            state.error = ''
        },

    },
    extraReducers: {
        [fetchLogin.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchLogin.fulfilled]: (state, action) => {
            if (action.payload){
                state.error = ''
                state.status = 'resolve'
                state.login = state.login.map(elem => ({...elem, value: ''}))
                localStorage.setItem('userId', `${action.payload._id}`) 
                localStorage.setItem('auth', 'true') 
            }
            else{
                state.error = 'Неверный email или пароль'
            }
        },
        [fetchLogin.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})



export const { updateLoginValue, updateLoginTypePassword, updateLoginStatus, resetLoginValue } = login.actions

export default login.reducer