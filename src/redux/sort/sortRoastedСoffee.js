import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    
    sortItems: [
        {
            title: 'Степень обжарки',
            sortValue: [
                { coffee: 5, value: 5 },
                { coffee: 4, value: 4 },
                { coffee: 3, value: 3 },
                { coffee: 2, value: 2 },
                { coffee: 1, value: 1 },
            ],
            activeValue: null
        },
        { title: 'География', sortValue: ['Африка', 'Йемен', 'Уганда', 'Эфиопия', 'Азия', 'Центр. Америка', 'Лат. Америка'], activeValue: null },
        { title: 'Кислинка', sortValue: ['Низкая', 'Средняя', 'Высокая'], activeValue: null },
        { title: 'Особые', sortValue: ['Популярное', 'Новый урожай', 'Ваш выбор', 'Микролот', 'Сорт недели', 'Скидки', 'Новинка'], activeValue: null },
        { title: 'Вид кофе', sortValue: ['Арабика', 'Робуста', 'Смесь арабик', 'Смесь арабика/робуста'], activeValue: null },
    ],
    sort: {
        sortValue: [
            { title: 'По возрастанию цены', name: 'topPrice' },
            { title: 'По убыванию цены', name: 'bottomPrice' },
            { title: 'По рейтингу', name: 'rating' },
            { title: 'По кислотности', name: 'acidic' }
        ],
        activeIndex: 2,
        isActive: false
    }
}


const sortRoastedСoffee = createSlice({
    name: 'roastedСoffeeSlice',
    initialState,
    reducers: {
        activeValueRoastedСoffee: (state, action) => {
            if (action.payload.title !== 'Степень обжарки') {
                const sortItem = state.sortItems.filter(elem => elem.title === action.payload.title)
                sortItem[0].activeValue = action.payload.index
            }
            else {
                const sortItem = state.sortItems.filter(elem => elem.title === action.payload.title)
                sortItem[0].activeValue = action.payload.index
            }

        },
        sortUpdateIndexRoastedСoffee: (state, action) => {
            state.sort.activeIndex = action.payload
        },
        sortUpdateActiveRoastedСoffee: (state, action) => {
            state.sort.isActive = action.payload
        },
        restartActiveRoastedСoffee: (state) => {
            for (let i = 0; i < 5; i++) {
                state.sortItems[i].activeValue = null
            }
        }
    },

})

export const { activeValueRoastedСoffee, sortUpdateIndexRoastedСoffee, sortUpdateActiveRoastedСoffee, restartActiveRoastedСoffee } = sortRoastedСoffee.actions

export default sortRoastedСoffee.reducer




