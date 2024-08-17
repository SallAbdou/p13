import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        user: null
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        signout: state => {
            state.token = null
            state.user = null
        }
    }
})

export const { setToken, setUser, signout } = authSlice.actions

export default authSlice.reducer

export const selectToken = state => state.auth.token
export const selectUser = state => state.auth.user