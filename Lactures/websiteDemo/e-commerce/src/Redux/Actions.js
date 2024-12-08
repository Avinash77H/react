import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART,CART_TO_WHISHLIST,ADD_TO_WHISHLIST,REMOVE_TO_WHISHLIST,EMPTY_WHISHLIST,WHISHLIST_TO_CART } from "./Constant";

export const add_to_cart = (product)=>{
  return {
    type:ADD_TO_CART,
    payload:product
  }
}
export const remove_to_cart = (remove_card_id)=>{
  return {
    type:REMOVE_TO_CART,
    payload:remove_card_id
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
export const add_to_whishlist = (whishlistProduct)=>{
  return {
    type:ADD_TO_WHISHLIST,
    payload:whishlistProduct
  }
}
export const remove_to_whishlist = (remove_card_id)=>{
  return {
    type:REMOVE_TO_WHISHLIST,
    payload:remove_card_id
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