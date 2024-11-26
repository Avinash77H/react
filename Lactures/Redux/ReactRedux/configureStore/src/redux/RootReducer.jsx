import { combineReducers } from 'redux'
import { penReducer } from './Reducer'
import { pencilReducer } from './Reducer'

const rootReducer = combineReducers({penReducer,pencilReducer});

export default rootReducer