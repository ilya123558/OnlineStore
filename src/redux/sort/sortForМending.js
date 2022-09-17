import { createSlice } from "@reduxjs/toolkit";
import imgLink from '../../images/catalog/forМending/sortForMending.png'

const initialState = {
    sortItems: [
        { img: imgLink, title: 'Гранулированный кофе', id: 1 },
        { img: imgLink, title: 'Гранулированный цикорий', id: 2 },
        { img: imgLink, title: 'Зерновой кофе', id: 3 },
        { img: '', title: '', id: 4 },
        { img: imgLink, title: 'Гранулированный какао', id: 5 },
        { img: imgLink, title: 'Гранулированные кофейные напитки', id: 6 },
        { img: imgLink, title: 'Кофе порошкообразный', id: 7 },
        { img: imgLink, title: 'Сухое молоко гранулированное', id: 8 },
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

const sortForМending = createSlice({
    name: 'sortForМendingSlice',
    initialState,
    reducers: {
        sortForМendingActiveState: (state, actions) => {
            state.sortActiveId = actions.payload
        },
        sortUpdateIndexForМending: (state, action) => {
            state.sort.activeIndex = action.payload
        },
        sortUpdateActiveForМending: (state, action) => {
            state.sort.isActive = action.payload
        },
    },


})

export const { sortForМendingActiveState, sortUpdateIndexForМending, sortUpdateActiveForМending } = sortForМending.actions

export default sortForМending.reducer
