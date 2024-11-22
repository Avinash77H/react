const redux = require("redux")
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

const createStore = redux.createStore;

const initialState =  {
    chocolate:10,
    cake: 17,
    drink:7
}

// const reducer = (state=initialState,action)=>{
//     switch (action.type) {
//         case 'BUY_CHOCOLATE': return{
//             ...state,chocolate:state.chocolate - 1
//         }
//         case 'BUY_CAKE': return{
//             ...state,cake:state.cake - 1
//         }
//         case 'BUY_DRINK': return{
//             ...state,drink:state.drink - 1
//         }
//         default: return state;
//     }
// }


const chocoReducer = (state=initialState,action)=>{
    if(action.type === 'BUY_CHOCOLATE'){
        return {
            ...state,chocolate:state.chocolate - 1
        }
    }
    return state;
}

const cakeReducer = (state=initialState,action)=>{
    if(action.type === 'BUY_CAKE'){
        return {
            ...state,cake:state.cake - 1
        }
    }
    return state;
}

const rootReducer = combineReducers({
  chocoReducer,
  cakeReducer
})


const store = createStore(rootReducer,applyMiddleware(logger))
console.log(store.getState())

store.dispatch({type:'BUY_CAKE'})
// store.dispatch({type:'BUY_CAKE'})
// store.dispatch({type:'BUY_CAKE'})
console.log(store.getState())

