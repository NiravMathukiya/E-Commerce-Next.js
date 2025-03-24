import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        Login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            // cookies.set("token", action.payload.token, { expires: 7, secure: true });
        },

        SignUp: () => { },
        Logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            // cookies.remove("token");
        },
    }
})

// console.log(authSlice)

export const { Login, Logout } = authSlice.actions;
export default authSlice.reducer;