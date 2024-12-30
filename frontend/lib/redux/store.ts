import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./slice/toggleSlice"
import dataSlice from "./slice/dataSlice"

export const store = configureStore({
    reducer:{
        toggle : toggleSlice,
        data : dataSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;