import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearch = createAsyncThunk(
    'users/fetchSearch',
    async (value) => {
        try {
            if (value === '') {
                return []
            }
            const response = await axios({
                method: 'GET',
                url: `http://localhost:5000/api/search/`,
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
    searchItems: [],
    searchValue: '',
    status: null,
    error: null,
}

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        updateSearchValue: (state, action) => {
            state.searchValue = action.payload
        }
    },
    extraReducers: {
        [fetchSearch.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchSearch.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.searchItems = action.payload.filter((elem, index) => index < 10? true : false)
        },
        [fetchSearch.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})

export const { updateSearchValue } = searchSlice.actions

export default searchSlice.reducer