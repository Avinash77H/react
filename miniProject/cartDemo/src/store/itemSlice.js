import { createSlice } from "@reduxjs/toolkit";

 const itemSlice = createSlice({
    name:'item',
    initialState:[],
    reducers:{
        addInitialItem:(state,action)=>{
            return action.payload   
        }
    }
})

export const {addInitialItem} = itemSlice.actions
export default itemSlice