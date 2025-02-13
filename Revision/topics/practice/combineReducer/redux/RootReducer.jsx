import {combineReducers} from 'redux'
import Reducer, { demoReducer } from './Reducer'

const RootReducer =  combineReducers({
    reducer1:Reducer,
    reducer2:demoReducer
  })


export default RootReducer;