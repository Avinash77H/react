import { ADD_INITIALDATA, ADD_LIKE, REMOVE_LIKE } from "./Constant"

export const addLike = (productId)=>{
  return {
    type:ADD_LIKE,
    payload:productId
  }
}

export const removeLike = (productId)=>{
  return {
    type:REMOVE_LIKE,
    payload:productId
  }
}

export const addInitialDAta = (productData)=>{
  return {
    type:ADD_INITIALDATA,
    payload:productData
  }
}