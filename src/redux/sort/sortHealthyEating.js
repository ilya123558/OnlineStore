import { createSlice } from "@reduxjs/toolkit";
import imgIcon from '../../images/catalog/healthyEating/imgIcon.png'


const initialState = {
    sortItems: [
        { img: imgIcon, title: 'Цикорий и корень цикория', id: 1 },
        { img: imgIcon, title: 'Ячменные напитки', id: 2 },
        { img: '', title: '', id: 3 },
        { img: imgIcon, title: 'Напитки для здоровья', id: 4 },
        { img: imgIcon, title: 'Протеиновые смеси', id: 5 },
        { img: imgIcon, title: 'Толокняные каши', id: 6 },
    ],
    sortActiveId: null,
    sort: {
        sortValue: [
            { title: 'По возрастанию цены', name: 'topPrice' },
            { title: 'По убыванию цены', name: 'bottomPrice' },
            { title: 'По рейтингу', name: 'rating' },
        ],
        activeIndex: null,
        isActive: false
    }
}

const sortHealthyEating = createSlice({
    name: 'healthyEatingSlice',
    initialState,
    reducers: {
        sortHealthyEatingActiveState: (state, actions) => {
            state.sortActiveId = actions.payload
        },
        sortUpdateIndexHealthyEating: (state, action) => {
            state.sort.activeIndex = action.payload
        },
        sortUpdateActiveHealthyEating: (state, action) => {
            state.sort.isActive = action.payload
        },
    },


})

export const { sortHealthyEatingActiveState, sortUpdateIndexHealthyEating, sortUpdateActiveHealthyEating } = sortHealthyEating.actions

export default sortHealthyEating.reducer