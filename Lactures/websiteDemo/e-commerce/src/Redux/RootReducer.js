import cartReducer from "./CartReducer";
import whishlistReducer from "./WhishlistReducer";
import productReducer from "./ProductReducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
  cart:cartReducer,
  whishList : whishlistReducer,
  product : productReducer
});

export default rootReducer;