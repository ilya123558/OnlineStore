import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchHealthyEating = createAsyncThunk(
    'users/fetchHealthyEating',
    async () => {
        try {
            const response = await fetch('http://localhost:5000/api/healthy-eating/all')
            const data = await response.json()
            return data

        } catch (error) {
            return new Error(error.message)
        }

    }
)

const initialState = {
    healthyEatingCardList: [],
    healthyEatingCardListFull: [],
    status: null,
    error: null,
}

const healthyEatingSlice = createSlice({
    name: 'healthyEatingSlice',
    initialState,
    reducers: {
        updateActiveHealthyEating: (state, active) => {
            const healthyEatingCard = state.healthyEatingCardList.find(elem => elem.id === active.payload.id)
            healthyEatingCard.activeListOptions = active.payload.value
        },
        sortHealthyEatingList: (state, action) => {
            switch (action.payload) {
                case 'topPrice':
                    state.healthyEatingCardList = state.healthyEatingCardList.sort((a, b) => a.listOptions[0].price - b.listOptions[0].price)
                    break
                case 'bottomPrice':
                    state.healthyEatingCardList = state.healthyEatingCardList.sort((a, b) => b.listOptions[0].price - a.listOptions[0].price)
                    break
                default:
                    state.healthyEatingCardList = state.healthyEatingCardList.sort((a, b) => b.num - a.num)
                    break
            }
        },
        filterHealthyEatingList: (state, action) => {
            state.healthyEatingCardList = state.healthyEatingCardListFull.filter(elem => elem.typeProduct === action.payload)
        },
    },

    extraReducers: {
        // all
        [fetchHealthyEating.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchHealthyEating.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.healthyEatingCardList = action.payload
            state.healthyEatingCardListFull = action.payload
        },
        [fetchHealthyEating.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})

export const { updateActiveHealthyEating, sortHealthyEatingList, filterHealthyEatingList } = healthyEatingSlice.actions

export default healthyEatingSlice.reducer