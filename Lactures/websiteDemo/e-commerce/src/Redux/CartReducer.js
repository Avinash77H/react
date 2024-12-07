import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  EMPTY_CART,
  CART_TO_WHISHLIST,
} from "./Constant";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, action.payload];
    }
    case REMOVE_TO_CART: {
    const newState = state.filter((item)=>(
        item.id !== action.payload
      ));
    return newState;
    }
    case EMPTY_CART:
      return {};
    case CART_TO_WHISHLIST:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
