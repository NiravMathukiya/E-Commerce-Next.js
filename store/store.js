import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/slices/Auth/authSlice"; // Ensure correct import path

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export default store;
