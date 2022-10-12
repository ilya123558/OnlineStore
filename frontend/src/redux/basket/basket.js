import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBasket = createAsyncThunk(
    'users/fetchBasket',
    async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/basket?userId=${localStorage.getItem('userId')}`)
            const data = await response.data
            return data

        } catch (error) {
            return new Error(error.message)
        }

    }
)

export const fetchBasketAllPrice = createAsyncThunk(
    'users/fetchBasketAllPrice',
    async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: 'http://localhost:5000/api/basket/all-price',
                params: {
                    userId: localStorage.getItem('userId'),
                }
            })
            const data = await response.data
            return data

        } catch (error) {
            return new Error(error.message)
        }

    }
)

export const fetchRemoveBasket = createAsyncThunk(
    'users/fetchRemoveBasket',
    async () => {
        try {
            await axios({
                method: 'DELETE',
                url: 'http://localhost:5000/api/basket/all',
                params: {
                    userId: localStorage.getItem('userId'),
                }
            })
            return []

        } catch (error) {
            return new Error(error.message)
        }

    }
)


export const fetchSetValueBasket = createAsyncThunk(
    'users/fetchSetValueBasket',
    async (props) => {
        try {
            const response = await fetch(`http://localhost:5000/api/basket?userId=${localStorage.getItem('userId')}`)
            const basketList = await response.json()

            if (basketList.filter(elem => elem.id === props.id
                &&
                elem.typePage === props.typePage
                &&
                elem.price === props.listOptions[props.activeIndex].price
                &&
                elem.userId === localStorage.getItem('userId')).length > 0) {
                await axios({
                    method: 'PUT',
                    url: 'http://localhost:5000/api/basket',
                    params: {
                        id: props.id,
                        userId: localStorage.getItem('userId'),
                        typePage: props.typePage,
                        grammar: props.listOptions[props.activeIndex].optionValue || props.listOptions[props.activeIndex].title,
                        amount: props.amount,
                    }
                })
            }

            else {
                await axios({
                    method: 'POST',
                    url: 'http://localhost:5000/api/basket',
                    params: {
                        id: props.id,
                        userId: localStorage.getItem('userId'),
                        typePage: props.typePage,
                        imgSrc: props.imgSrc,
                        title: props.title,
                        subtitle: props.subtitle || props.typeProduct,
                        grammar: props.listOptions[props.activeIndex].optionValue || props.listOptions[props.activeIndex].title,
                        price: props.listOptions[props.activeIndex].price,
                        amount: props.amount,
                        discount: 0,
                    }
                })
            }

        } catch (error) {
            return new Error(error.message)
        }

    }
)

export const fetchDeleteItemBasket = createAsyncThunk(
    'users/fetchDeleteItemBasket',
    async (_id) => {
        try {
            await axios({
                method: 'DELETE',
                url: 'http://localhost:5000/api/basket/',
                params: {
                    _id: _id,
                    userId: localStorage.getItem('userId')
                }
            })

        } catch (error) {
            return new Error(error.message)
        }

    }
)

export const fetchSetAmountBasket = createAsyncThunk(
    'users/fetchSetAmountBasket',
    async (props) => {
        try {
            await axios({
                method: 'PUT',
                url: 'http://localhost:5000/api/basket/amount',
                params: {
                    _id: props._id,
                    amount: props.amount,
                    userId: localStorage.getItem('userId')
                }
            })

        } catch (error) {
            return new Error(error.message)
        }

    }
)



const initialState = {
    basketList: [],
    error: '',
    status: '',
    basketPriceAll: {}
}

const basketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {

        setAmountBasket: (state, action) => {
            state.basketList = state.basketList.map(elem => elem.id === action.payload.id && elem.typePage === action.payload.typePage && elem.price === action.payload.price
                ?
                { ...elem, amount: action.payload.amount }
                :
                elem
            )
        },
        deleteValueBasket: (state, action) => {
            state.basketList = state.basketList.filter(elem => (elem._id !== action.payload._id || elem.price !== action.payload.price))
        }

    },
    extraReducers: {
        [fetchBasket.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchBasket.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.basketList = action.payload
        },
        [fetchBasket.rejected]: (state, action) => {
            state.error = action.payload
        },
        [fetchRemoveBasket.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchRemoveBasket.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.basketList = action.payload
        },
        [fetchRemoveBasket.rejected]: (state, action) => {
            state.error = action.payload
        },
        [fetchSetValueBasket.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchSetValueBasket.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.basketList = action.payload
        },
        [fetchSetValueBasket.rejected]: (state, action) => {
            state.error = action.payload
        },
        [fetchBasketAllPrice.pending]: (state) => {
            state.status = 'loading'
        },
        [fetchBasketAllPrice.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.basketPriceAll = action.payload
        },
        [fetchBasketAllPrice.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})

export const { setValueBasket, deleteValueBasket, setAmountBasket } = basketSlice.actions

export default basketSlice.reducer