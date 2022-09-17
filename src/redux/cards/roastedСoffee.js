import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRoastedСoffee = createAsyncThunk(
    'users/fetchRoastedСoffee',
    async () => {
        try {
            const response = await fetch('http://localhost:5000/api/roasted/discount')
            const data = await response.json()
            return data

        } catch (error) {
            return new Error(error.message)
        }

    }
)

export const fetchRoastedСoffeeAll = createAsyncThunk(
    'users/fetchByIdStatusAll',
    async () => {
        try {
            const response = await fetch('http://localhost:5000/api/roasted/all')
            const data = await response.json()
            return data

        } catch (error) {
            return new Error(error.message)
        }

    }
)


const initialState = {
    roastedСoffeeCardList: [],
    roastedСoffeeCardListFull: [],
    roastedСoffeeCardListDiscount: [],
    status: null,
    error: null,
    sorted: false,
}


const roastedСoffeeSlice = createSlice({
    name: 'roastedСoffeeSlice',
    initialState,
    reducers: {
        updateRoastedСoffeePrice: (state, action) => {
            try {
                let roastedСoffeeCard = state.roastedСoffeeCardList.find(elem => elem.id === action.payload.id)
                roastedСoffeeCard.price = action.payload.price
                if (action.payload.oldPrice) {
                    roastedСoffeeCard.oldPrice = action.payload.oldPrice
                }
            }
            catch {
                let roastedСoffeeCard = state.roastedСoffeeCardListDiscount.find(elem => elem.id === action.payload.id)
                roastedСoffeeCard.price = action.payload.price
                roastedСoffeeCard.oldPrice = action.payload.oldPrice
            }
        },
        sortRoastedСoffeeList: (state, action) => {
            state.sorted = true
            switch (action.payload) {
                case 'topPrice':
                    state.roastedСoffeeCardList = state.roastedСoffeeCardList.sort((a, b) => a.listOptions[0].price - b.listOptions[0].price)
                    break
                case 'bottomPrice':
                    state.roastedСoffeeCardList = state.roastedСoffeeCardList.sort((a, b) => b.listOptions[0].price - a.listOptions[0].price)
                    break
                case 'acidic':
                    state.roastedСoffeeCardList = state.roastedСoffeeCardList.sort((a, b) => b.acidicLvl - a.acidicLvl)
                    break
                default:
                    state.roastedСoffeeCardList = state.roastedСoffeeCardList.sort((a, b) => b.num - a.num)
                    break
            }
        },
        filterDegreeRoastedСoffeeList: (state, action) => {
            state.roastedСoffeeCardList = state.roastedСoffeeCardList.filter(elem => elem.toastingLvl === action.payload)
        },
        sortTypeRoastedСoffeeList: (state,action) => {
            switch (action.payload.type) {
                case 'География': 
                    state.roastedСoffeeCardList = state.roastedСoffeeCardList.filter(elem => elem.geography === action.payload.value)
                    break
                case 'Кислинка':
                    state.roastedСoffeeCardList = state.roastedСoffeeCardList.filter(elem => elem.acidicLvl === action.payload.value)
                    break
                case 'Особые': 
                    state.roastedСoffeeCardList = state.roastedСoffeeCardList.filter(elem => elem.special === action.payload.value)
                    break
                default:
                    state.roastedСoffeeCardList = state.roastedСoffeeCardList.filter(elem => elem.typeOfCoffee === action.payload.value)
                    break
            }
        },
        restartRoastedСoffeeList: state => {
            state.roastedСoffeeCardList = state.roastedСoffeeCardListFull
        }
    },

    extraReducers: {
        // discount
        [fetchRoastedСoffee.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchRoastedСoffee.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.roastedСoffeeCardListDiscount = action.payload
        },
        [fetchRoastedСoffee.rejected]: (state, action) => {
            state.error = action.payload
        },
        // all
        [fetchRoastedСoffeeAll.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchRoastedСoffeeAll.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.roastedСoffeeCardListFull = action.payload
            state.roastedСoffeeCardList = action.payload
        },
        [fetchRoastedСoffeeAll.rejected]: (state, action) => {
            state.error = action.payload
        },
    }


}
)

export const { updateRoastedСoffeePrice, sortRoastedСoffeeList, filterDegreeRoastedСoffeeList, sortTypeRoastedСoffeeList, restartRoastedСoffeeList } = roastedСoffeeSlice.actions

export default roastedСoffeeSlice.reducer