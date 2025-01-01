import { createSlice } from "@reduxjs/toolkit";

interface Show {
    showSidebar:boolean;
    showInputNode:boolean;
    showOutputNode:boolean;
    showPipeline:boolean;
}

const initialState:Show = {
    showSidebar:true,
    showInputNode:false,
    showOutputNode:false,
    showPipeline:false
}

const toggleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers:{
        toggleSidebar(state){
            state.showSidebar = !state.showSidebar
        },

        toggleInputNode(state,action){
            state.showInputNode = action.payload
        },
        toggleOutputNode(state,action){
            state.showOutputNode = action.payload
        },
        togglePipeline(state){
            state.showPipeline = !state.showPipeline
        }
    }
})

export const {toggleSidebar, toggleInputNode, toggleOutputNode, togglePipeline} = toggleSlice.actions;

export default toggleSlice.reducer;