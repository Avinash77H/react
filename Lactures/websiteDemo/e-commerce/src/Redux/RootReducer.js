import cartReducer from "./CartReducer";
import whishlistReducer from "./WhishlistReducer";
import productReducer from "./ProductReducer";
import {combineReducer} from "redux"


const rootReducer = combineReducer({
  cart:cartReducer,
  whishList : whishlistReducer,
  product : productReducer
});

export default rootReducer;