import { buy_cake, buy_choco, buy_item1,buy_item2 } from "./Constant"


export const  Item1 = ()=>{
  return {
    type:buy_item1
  }
}
export const Item2 = ()=>{
  return {
    type:buy_item2
  }
}

export const Cake = ()=>{
  return {
    type : buy_cake
  }
}

export const Choco = ()=>{
  return {
    type : buy_choco
  }
}