import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSerch = createAsyncThunk(
    'users/fetchSerch',
    async (value) => {
        try {
            if (value === '') {
                return []
            }
            const response = await axios({
                method: 'GET',
                url: `http://localhost:5000/api/serch/`,
                params: { value }
            })
            const data = await response.data
            return data

        } catch (error) {
            return new Error(error.message)
        }
    }
)

const initialState = {
    serchItems: [],
    serchValue: '',
    status: null,
    error: null,
}

const serchSlice = createSlice({
    name: 'serchSlice',
    initialState,
    reducers: {
        updateSerchValue: (state, action) => {
            state.serchValue = action.payload
        }
    },
    extraReducers: {
        [fetchSerch.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchSerch.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.serchItems = action.payload.filter((elem, index) => index < 10? true : false)
        },
        [fetchSerch.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})

export const { updateSerchValue } = serchSlice.actions

export default serchSlice.reducer