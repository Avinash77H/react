// const redux = require("redux");
// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers;
// const applyMiddleware = redux.applyMiddleware;
const {createStore,combineReducers,applyMiddleware} = require("redux")
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()


const harmoniumStock = {
  harmonium: 17,
};
const tablaStock = {
  tabla: 10,
};
const guitarStock = {
  guitar: 7,
};



const harmoniumReducer = (state = harmoniumStock, action) => {
  if ((action.type === "BUY_HARMONIUM")) {
    return { ...state, harmonium: state.harmonium - action.payload };
  }
  return state;
};

const tablaReducer = (state = tablaStock, action) => {
  if ((action.type === "BUY_TABLA")) {
    return { ...state, tabla: state.tabla - action.payload };
  }
  return state;
};

const guitarReducer = (state = guitarStock, action) => {
  if ((action.type === "BUY_GUITAR")) {
    return { ...state, guitar: state.guitar - action.payload };
  }
  return state;
};

const rootReducer = combineReducers({
  harmonium:harmoniumReducer,
  tabla:tablaReducer,
  guitar:guitarReducer,
});

const store = createStore(rootReducer,applyMiddleware(logger));
// const sub = store.subscribe(() => console.log(store.getState()));

const harmonium = (value) => {
  store.dispatch({ type: "BUY_HARMONIUM" ,payload:value});
};
const tabla = (value) => {
  store.dispatch({ type: "BUY_TABLA",payload:value });
};
const guitar = (value) => {
  store.dispatch({ type: "BUY_GUITAR",payload:value });
};

// console.log("initial value:", store.getState());
harmonium(17);
tabla(10)
