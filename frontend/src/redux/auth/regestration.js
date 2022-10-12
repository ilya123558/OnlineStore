import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRegestration = createAsyncThunk(
    'users/fetchRegestration',
    async (props) => {
        try {
            const response = await axios({
                method: 'POST',
                url: `http://localhost:5000/api/user/`,
                params: {
                    name: props.name,
                    email: props.email,
                    phone: props.phone,
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
    regestration: [
        { title: 'Name', value: '', placeholder: 'Имя и фамилия', type: 'text' },
        { title: 'Email', value: '', placeholder: 'Email', type: 'email' },
        { title: 'Phone', value: '', placeholder: 'Телефон', type: 'tel' },
        { title: 'Password', value: '', placeholder: 'Придумайте пароль', type: 'password' },
    ]
}

const regestration = createSlice({
    name: 'regestration',
    initialState,
    reducers: {
        updateRegestrationValue: (state, action) => {
            state.regestration = state.regestration.map(elem => elem.title === action.payload.title
                ?
                { ...elem, value: action.payload.value }
                :
                elem)
        },
        updateRegestrationTypePassword: (state, action) => {
            state.regestration = state.regestration.map(elem => elem.title === 'Password'
                ?
                { ...elem, type: action.payload.type }
                :
                elem)
        },
        updateRegestrationStatus: (state, action) => {
            state.status = action.payload
        },
        resetRegestrationValue: (state, action) => {
            state.regestration = state.regestration.map(elem => ({...elem, value: ''}))
            state.error = ''

        },

    },
    extraReducers: {
        [fetchRegestration.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchRegestration.fulfilled]: (state, action) => {
            if (action.payload.error) {
                state.error = action.payload.error
            }
            else {
                state.status = 'resolve'
                state.regestration = state.regestration.map(elem => ({...elem, value: ''}))
            }
        },
        [fetchRegestration.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})



export const { updateRegestrationValue, updateRegestrationTypePassword, updateRegestrationStatus, resetRegestrationValue } = regestration.actions

export default regestration.reducer