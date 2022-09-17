import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basketList: []
}

const basketSlice = createSlice({
    name: 'basketSlice',
    initialState,
    reducers: {
        setValueBasket: (state, action) => {
            if (state.basketList.filter(elem => elem.id === action.payload.id && elem.typePage === action.payload.typePage && elem.activeIndex === action.payload.activeIndex).length > 0) {

                state.basketList = state.basketList.map(elem => elem.id === action.payload.id && elem.typePage === action.payload.typePage && elem.activeIndex === action.payload.activeIndex
                    ?
                    { ...elem, amount: elem.amount + action.payload.amount }
                    :
                    elem
                )
            }
            else {
                state.basketList = [...state.basketList, action.payload]
            }


        },
        setAmountBasket: (state, action) => {
            state.basketList = state.basketList.map(elem => elem.id === action.payload.elem.id && elem.typePage === action.payload.elem.typePage
                ?
                { ...elem, amount: action.payload.amount }
                :
                elem
            )
        },
        deleteValueBasket: (state, action) => {
            state.basketList = state.basketList.filter(elem => (elem.id !== action.payload.id || elem.typePage !== action.payload.typePage || elem.activeIndex !== action.payload.activeIndex))
        },

        removeBasket: (state) => {
            state.basketList = []
        },
    }
})

export const { setValueBasket, deleteValueBasket, setAmountBasket, removeBasket } = basketSlice.actions

export default basketSlice.reducer