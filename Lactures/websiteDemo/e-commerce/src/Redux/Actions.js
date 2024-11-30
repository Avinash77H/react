import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART,CART_TO_WHISHLIST,ADD_TO_WHISHLIST,REMOVE_TO_WHISHLIST,EMPTY_WHISHLIST,WHISHLIST_TO_CART } from "./Constant";

export const add_to_cart = ()=>{
  return {
    type:ADD_TO_CART
  }
}
export const remove_to_cart = ()=>{
  return {
    type:REMOVE_TO_CART
  }
}
export const empty_cart = ()=>{
  return {
    type:EMPTY_CART
  }
}
export const cart_to_whishlist = ()=>{
  return {
    type:CART_TO_WHISHLIST
  }
}
export const add_to_whishlist = ()=>{
  return {
    type:ADD_TO_WHISHLIST
  }
}
export const remove_to_whishlist = ()=>{
  return {
    type:REMOVE_TO_WHISHLIST
  }
}
export const empty_whishlist = ()=>{
  return {
    type:EMPTY_WHISHLIST
  }
}
export const whishlist_to_cart = ()=>{
  return {
    type:WHISHLIST_TO_CART
  }
}