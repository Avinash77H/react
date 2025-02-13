const redux = require('redux');

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const initialState = {
  item1 : 10,
  item2 : 15
}

const buy_item1 = ()=>{
  return {
    type: 'BUY_ITEM1'
  }
}
const buy_item2 = ()=>{
  return {
    type: 'BUY_ITEM2'
  }
}

const reducer = (state = initialState,action)=>{
  switch(action.type){
    case 'BUY_ITEM1': return {...state, item1:state.item1 - 1}
    case 'BUY_ITEM2': return {...state, item2:state.item2 - 1}
    default: return state
  }
}

const store = createStore(reducer,applyMiddleware(logger));

console.log(store.getState())
store.subscribe(()=>console.log(store.getState()));

store.dispatch(buy_item1());
store.dispatch(buy_item2());
store.dispatch(buy_item2());