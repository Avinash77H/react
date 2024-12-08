import { ADD_TO_WHISHLIST,REMOVE_TO_WHISHLIST,EMPTY_WHISHLIST,WHISHLIST_TO_CART } from "./Constant";

const whishlistReducer = (state = [],action)=>{
  switch(action.type){
    case ADD_TO_WHISHLIST:return[...state,action.payload]
    case REMOVE_TO_WHISHLIST:{
      const newItems = state.filter((item)=>item.id !== action.payload);
      return newItems
    }
    case EMPTY_WHISHLIST:return{

    }
    case WHISHLIST_TO_CART:return{

    }
    default:return state;
  }
}

export default whishlistReducer;