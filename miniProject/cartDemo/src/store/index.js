import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import itemLikeSlice from './itemLikeSlice'

const myntraStore = configureStore({
    reducer:{
        item:itemSlice.reducer,
        like:itemLikeSlice.reducer
    }
})



export default myntraStore