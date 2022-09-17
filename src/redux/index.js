import { configureStore } from "@reduxjs/toolkit"
import roastedСoffee from './cards/roastedСoffee'
import sortRoastedСoffee from './sort/sortRoastedСoffee'
import sortTeaAndCoffee from './sort/sortTeaAndCoffee'
import teaAndCoffee from './cards/teaAndCoffee'
import sortForМending from './sort/sortForМending'
import forМending from './cards/forManding'
import sortHealthyEating from './sort/sortHealthyEating'
import healthyEating from './cards/healthyEating'
import cardInner from './card/cardInner'
import basket from './basket/basket'

export const store = configureStore({
    reducer: {
        roastedСoffee,
        sortRoastedСoffee,
        sortTeaAndCoffee,
        teaAndCoffee,
        sortForМending,
        forМending,
        sortHealthyEating,
        healthyEating,
        cardInner,
        basket
    }
})