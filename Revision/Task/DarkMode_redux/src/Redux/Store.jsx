import {createStore} from 'redux'
import ThemeReducer from './ThemeReducer'

const Store = createStore(ThemeReducer);

export default Store;