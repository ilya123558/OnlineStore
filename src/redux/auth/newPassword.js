import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNewPassword = createAsyncThunk(
    'users/fetchNewPassword',
    async (props) => {
        try {
            const response = await axios({
                method: 'PUT',
                url: `http://localhost:5000/api/user/`,
                params: {
                    email: props.email,
                    password: props.password,
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
    newPassword: [
        { title: 'Password', value: '', placeholder: 'Придумайте пароль', type: 'password' },
    ]
}

const newPassword = createSlice({
    name: 'newPassword',
    initialState,
    reducers: {
        updateNewPasswordValue: (state, action) => {
            state.newPassword = state.newPassword.map(elem => elem.title === action.payload.title
                ?
                { ...elem, value: action.payload.value }
                :
                elem)
        },
        updateNewPasswordTypePassword: (state, action) => {
            state.newPassword = state.newPassword.map(elem => elem.title === 'Password'
                ?
                { ...elem, type: action.payload.type }
                :
                elem)
        },
        updateNewPasswordStatus: (state, action) => {
            state.status = action.payload
        },
        resetNewPasswordValue: (state, action) => {
            state.newPassword = state.newPassword.map(elem => ({...elem, value: ''}))
            state.status = 'loading'
        },

    },
    extraReducers: {
        [fetchNewPassword.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchNewPassword.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.newPassword = state.newPassword.map(elem => ({...elem, value: ''}))
        },
        [fetchNewPassword.rejected]: (state, action) => {
            state.error = action.payload
            state.error = ''

        },
    }
})



export const { updateNewPasswordValue, updateNewPasswordTypePassword, updateNewPasswordStatus, resetNewPasswordValue } = newPassword.actions

export default newPassword.reducer
