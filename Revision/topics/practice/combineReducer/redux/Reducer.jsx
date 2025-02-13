import { buy_item1,buy_item2,buy_cake,buy_choco } from "./Constant"



 const initialState = {
  item1 : 10,
  item2 : 20
}

const intialState2 = {
  cake: 100,
  choco : 200
}

const Reducer = (state = initialState,action)=>{
  switch(action.type){
    case buy_item1 : return {...state,item1:state.item1 - 1}
    case buy_item2 : return {...state,item2:state.item2 - 1}
    default : return state
  }
}

export const demoReducer = (state = intialState2,action)=>{
  switch(action.type){
    case buy_cake : return {...state,cake:state.cake - 1}
    case buy_choco : return {...state,choco:state.choco - 1}
    default : return state;
  }
}

export default Reducer;