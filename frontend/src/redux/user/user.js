import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: `http://localhost:5000/api/user/${localStorage.getItem('userId')}`
            })
            const data = await response.data
            return data

        } catch (error) {
            return new Error(error.message)
        }

    }
)

export const fetchUserUpdate = createAsyncThunk(
    'users/fetchUserUpdate',
    async (props) => {
        try {
            const response = await axios({
                method: 'PUT',
                url: `http://localhost:5000/api/user/all`,
                params: {
                    _id: props._id,
                    name: props.name,
                    email: props.email,
                    phone: props.phone,
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
    user: {}

}

const user = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [fetchUser.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.user = action.payload
        },
        [fetchUser.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})



export const { userUpdate } = user.actions

export default user.reducer