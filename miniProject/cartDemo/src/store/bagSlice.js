import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name:'bag',
  initialState:[1,3],
  reducers:{
    addItem:(state,action)=>{
      state.push(action.payload)
    },
    removeItem:(state,action)=>{
      return state.filter((item)=> item !== action.payload)
    }
  }
})

export const {addItem,removeItem} = bagSlice
export default bagSlice