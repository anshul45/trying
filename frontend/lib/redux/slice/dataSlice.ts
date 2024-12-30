import { createSlice } from "@reduxjs/toolkit";

interface InitialStateProps{
inputData:string
outputData:string
}

const initialState:InitialStateProps = {
    inputData:"",
    outputData:""
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
        }
    }
})

export const {updateInputData,updateOutputData} = dataSlice.actions;

export default dataSlice.reducer;