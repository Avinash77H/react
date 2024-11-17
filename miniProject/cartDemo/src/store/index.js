import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import itemLikeSlice from './itemLikeSlice'
import bagSlice from "./bagSlice";

const myntraStore = configureStore({
    reducer:{
        item:itemSlice.reducer,
        like:itemLikeSlice.reducer,
        bag:bagSlice.reducer
    }
})



export default myntraStore