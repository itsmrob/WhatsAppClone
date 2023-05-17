import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // isAuthenticated: false,
    // user: null
    token: null, 
    userData: null

}

const oAuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticate: (state, action) => {
            const { payload } = action;
            state.token = payload.token;
            state.userData = payload.userData;
        }
    }
})

export const { authenticate } = oAuthSlice.actions;

export default oAuthSlice.reducer;