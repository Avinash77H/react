const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const initialState = {
  item1 : 10,
  item2 : 20
}

function reducer(state = initialState,action){
  switch(action.type){
    case 'BUY_ITEM1': return {...state, item1 : state.item1 -1}
    case 'BUY_ITEM2': return {...state, item2 : state.item2 - 1}
   default : return state;
  }
}

const store = createStore(reducer,applyMiddleware(logger));


console.log("current State:",store.getState()); // show current state

store.subscribe(()=>console.log("updated State:",store.getState()))

store.dispatch({type:"BUY_ITEM1"});
store.dispatch({type:"BUY_ITEM1"});
store.dispatch({type:"BUY_ITEM2"});