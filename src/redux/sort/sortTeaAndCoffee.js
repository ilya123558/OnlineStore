import { createSlice } from "@reduxjs/toolkit";
import funk from '../../images/catalog/TeaAndCoffee/index'

const initialState = {
    sortItems: [
        { img: funk('blackTea'), title: 'Чёрный чай', id: 1 },
        { img: funk('greenTea'), title: 'Зеленый чай', id: 2 },
        { img: funk('milkOolong'), title: 'Молочный улунг', id: 3 },
        { img: '', title: '', id: 4 },
        { img: funk('herbalTea'), title: 'Травяной чай', id: 5 },
        { img: funk('matcha'), title: 'Матча', id: 6 },
        { img: funk('puer'), title: 'Пуэр', id: 7 },
        { img: funk('coffeeDrinks'), title: 'Кофейные напитки', id: 8 },
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

const sortTeaAndCoffee = createSlice({
    name: 'roastedСoffeeSlice',
    initialState,
    reducers: {
        sortTeaAndCoffeeActiveState: (state, actions) => {
            state.sortActiveId = actions.payload
        },
        sortUpdateIndexTeaAndCoffee: (state, action) => {
            state.sort.activeIndex = action.payload
        },
        sortUpdateActiveTeaAndCoffee: (state, action) => {
            state.sort.isActive = action.payload
        },
    },


})

export const { sortTeaAndCoffeeActiveState, sortUpdateActiveTeaAndCoffee, sortUpdateIndexTeaAndCoffee } = sortTeaAndCoffee.actions

export default sortTeaAndCoffee.reducer
