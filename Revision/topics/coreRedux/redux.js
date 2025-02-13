const redux = require('redux');

const createStore = redux.createStore

let initialState = 10;

const buy_item = ()=>{
  return{
    type:'BUY_ITEM',
    info:'first redux action'
  }
}

const ItemReducer = (state = initialState,action)=>{
  switch(action.type){
    case 'BUY_ITEM': return state - 1
    default : return state
  }
}

const store = createStore(ItemReducer);

console.log('initialState:',store.getState());
store.subscribe(()=>console.log("updatedStore:",store.getState()));

store.dispatch(buy_item())
store.dispatch(buy_item())
store.dispatch(buy_item())
