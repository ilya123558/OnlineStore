import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPassword = createAsyncThunk(
    'users/fetchPassword',
    async (props) => {
        try {
            const response = await axios({
                method: 'GET',
                url: `http://localhost:5000/api/user/check`,
                params: {
                    email: props.email,
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
    password: [
        { title: 'Email', value: '', placeholder: 'Email', type: 'email' },
    ]
}

const password = createSlice({
    name: 'password',
    initialState,
    reducers: {
        updatePasswordValue: (state, action) => {
            state.password = state.password.map(elem => elem.title === action.payload.title
                ?
                { ...elem, value: action.payload.value }
                :
                elem)
        },
        updatePasswordStatus: (state, action) => {
            state.status = action.payload
        },
        resetPasswordValue: (state, action) => {
            state.password = state.password.map(elem => ({...elem, value: ''}))
            state.error = ''

        },

    },
    extraReducers: {
        [fetchPassword.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchPassword.fulfilled]: (state, action) => {
            if (action.payload.error) {
                state.error = action.payload.error
            }
            else {
                state.status = 'resolve'
                state.error = ''
            }
        },
        [fetchPassword.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})



export const { updatePasswordValue, updatePasswordStatus, resetPasswordValue } = password.actions

export default password.reducer