import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchForМending = createAsyncThunk(
    'users/fetchForМending',
    async () => {
        try {
            const response = await fetch('http://localhost:5000/api/for-mending/all')
            const data = await response.json()
            return data

        } catch (error) {
            return new Error(error.message)
        }
    }
)

const initialState = {
    forМendingCardList: [],
    forМendingCardListFull: [],
    status: null,
    error: null,
}

const forМendingSlice = createSlice({
    name: 'forМendingSlice',
    initialState,
    reducers: {
        updateActiveForМending: (state, active) => {
            const forМendingCard = state.forМendingCardList.find(elem => elem.id === active.payload.id)
            forМendingCard.activeListOptions = active.payload.value
        },
        sortForМendingList: (state, action) => {
            switch (action.payload) {
                case 'topPrice':
                    state.forМendingCardList = state.forМendingCardList.sort((a, b) => a.listOptions[0].price - b.listOptions[0].price)
                    break
                case 'bottomPrice':
                    state.forМendingCardList = state.forМendingCardList.sort((a, b) => b.listOptions[0].price - a.listOptions[0].price)
                    break
                default:
                    state.forМendingCardList = state.forМendingCardList.sort((a, b) => b.num - a.num)
                    break
            }
        },
        filterForМendingList: (state, action) => {
            state.forМendingCardList = state.forМendingCardListFull.filter(elem => elem.typeProduct === action.payload)
        }
    },
        extraReducers: {
        // all
        [fetchForМending.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchForМending.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.forМendingCardListFull = action.payload
            state.forМendingCardList = action.payload
        },
        [fetchForМending.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})

export const { updateActiveForМending, sortForМendingList, filterForМendingList } = forМendingSlice.actions

export default forМendingSlice.reducer