import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeaAndCoffee = createAsyncThunk(
    'users/fetchTeaAndCoffee',
    async () => {
        try {
            const response = await fetch('http://localhost:5000/api/tea-and-coffee/all')
            const data = await response.json()
            return data

        } catch (error) {
            return new Error(error.message)
        }

    }
)

const initialState = {
    teaAndCoffeeCardList: [],
    teaAndCoffeeCardListFull: [],
    status: null,
    error: null,
}

const teaAndCoffeeSlice = createSlice({
    name: 'teaAndCoffeeSlice',
    initialState,
    reducers: {
        updateActiveTeaAndCoffee: (state, action) => {
            const teaAndCoffeeCard = state.teaAndCoffeeCardList.find(elem => elem.id === action.payload.id)
            teaAndCoffeeCard.activeListOptions = action.payload.value
        },
        sortTeaAndCoffeeList: (state, action) => {
            switch (action.payload) {
                case 'topPrice':
                    state.teaAndCoffeeCardList = state.teaAndCoffeeCardList.sort((a, b) => a.listOptions[0].price - b.listOptions[0].price)
                    break
                case 'bottomPrice':
                    state.teaAndCoffeeCardList = state.teaAndCoffeeCardList.sort((a, b) => b.listOptions[0].price - a.listOptions[0].price)
                    break
                default:
                    state.teaAndCoffeeCardList = state.teaAndCoffeeCardList.sort((a, b) => b.num - a.num)
                    break
            }
        },
        filterActiveTeaAndCoffee: (state, action) => {
            state.teaAndCoffeeCardList = state.teaAndCoffeeCardListFull.filter(elem => elem.typeProduct === action.payload)
        }
    },

    extraReducers: {
        // all
        [fetchTeaAndCoffee.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchTeaAndCoffee.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.teaAndCoffeeCardListFull = action.payload
            state.teaAndCoffeeCardList = action.payload
        },
        [fetchTeaAndCoffee.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})

export const { updateActiveTeaAndCoffee, sortTeaAndCoffeeList, filterActiveTeaAndCoffee } = teaAndCoffeeSlice.actions

export default teaAndCoffeeSlice.reducer