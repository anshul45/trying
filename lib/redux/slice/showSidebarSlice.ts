import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Show {
    showSidebar:boolean;
}

const initialState:Show = {
    showSidebar:true
}

const sideBarSlice = createSlice({
    name:"sidebar",
    initialState,
    reducers:{
        toggleSidebar(state){
            state.showSidebar = !state.showSidebar
        }
    }
})

export const {toggleSidebar} = sideBarSlice.actions;

export default sideBarSlice.reducer;