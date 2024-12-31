import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps{
inputData:string
inputNodes:any[]
outputData:string
}

const initialState:InitialStateProps = {
    inputData:"",
    outputData:"",
    inputNodes:[]
}

const dataSlice = createSlice({
    name:"data",
    initialState:initialState,
    reducers:{
        updateInputData(state,action){
            state.inputData = action.payload
        },
        updateOutputData(state,action){
            state.outputData = action.payload
        },
        updateinputNodes(state,action){
            state.inputNodes = action.payload
        }
    }
})

export const {updateInputData,updateOutputData,updateinputNodes} = dataSlice.actions;

export default dataSlice.reducer;