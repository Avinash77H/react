import { PRODUCT_SET } from "./Constant";

const productReducer = (state = [],action)=>{
  if(action.type === PRODUCT_SET){
    return [action.payload];
  }
  return state;
};

export default productReducer