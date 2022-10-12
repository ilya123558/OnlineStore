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
import auth from './auth/auth'
import regestration from './auth/regestration'
import login from './auth/login'
import password from './auth/password'
import newPassword from './auth/newPassword'
import user from "./user/user" 
import search from './search/search'

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
        basket,
        auth,
        regestration,
        login,
        password,
        newPassword,
        user,
        search
    }
})