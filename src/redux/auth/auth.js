import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: 'loading',
    typeAuth: 'Registration',
    authVisible: false
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateTypeAuth: (state, action) => {
            state.typeAuth = action.payload
        },

        updateAuthVisible: (state, action) => {
            state.authVisible = action.payload
        }

    },
})


export const { updateTypeAuth, updateAuthVisible } = auth.actions

export default auth.reducer