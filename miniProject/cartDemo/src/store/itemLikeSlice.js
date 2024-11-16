import { createSlice } from "@reduxjs/toolkit";

const itemLikeSlice =createSlice({
    name:'like',
    initialState:[1,3,5],
    reducers:{
        liked:(state,action)=>{
           state.push(action.payload)
        },
        unLiked:(state,action)=>{
            return state.filter((itemId)=>itemId !== action.payload)
        }
    }
})

export const {liked,unLiked} = itemLikeSlice.actions
export default itemLikeSlice