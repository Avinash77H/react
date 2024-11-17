import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name:'bag',
  initialState:[],
  reducers:{
    addItem:(state,action)=>{
      state.push(action.payload)
    },
    removeItem:(state,action)=>{
      return state.filter((item)=> item !== action.payload)
    }
  }
})

export const {addItem,removeItem} = bagSlice.actions
export default bagSlice
