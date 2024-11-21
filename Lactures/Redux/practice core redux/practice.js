const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  harmonium: 17,
  tabla: 10,
  guitar: 7,
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case "BUY_HARMONIUM":
      return {...state, harmonium: state.harmonium - 1 };
  
    case "BUY_TABLA":
        return {...state, tabla: state.tabla - 1 };
      
      case "BUY_GUITAR": 
        return {...state, guitar: state.guitar - 1 };
      
      default: return state
  }
};

const store = createStore(reducer);
const sub = store.subscribe(()=>console.log(store.getState()));

const harmonium = ()=>{
    store.dispatch({type:"BUY_HARMONIUM"});
}
const tabla = ()=>{
    store.dispatch({type:"BUY_TABLA"});
}
const guitar = ()=>{
    store.dispatch({type:"BUY_GUITAR"});
}

console.log("initial value:",store.getState())
harmonium()
tabla()
guitar()
harmonium()
sub()