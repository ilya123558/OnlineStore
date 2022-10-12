import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCard = createAsyncThunk(
    'users/fetchCard',
    async (link) => {
        try {
            const response = await fetch(`http://localhost:5000/api${link}`)
            const data = await response.json()
            return data

        } catch (error) {
            return new Error(error.message)
        }

    }
)

const initialState = {
    card: {},
    status: null,
    error: null,
}

const cardInner = createSlice({
    name: 'cardInner',
    initialState,
    reducers: {},
    extraReducers: {
        // all
        [fetchCard.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchCard.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.card = action.payload
        },
        [fetchCard.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})

export default cardInner.reducer