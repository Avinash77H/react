import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";

const myntraStore = configureStore({
    reducer:{
        item:itemSlice.reducer
    }
})



export default myntraStore