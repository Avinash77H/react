import { DARK_THEME,LIGHT_THEME } from "./constant"

const initialState = {
  theme:"light"
}

const ThemeReducer = (state = initialState,action)=>{
  switch(action.type){ 
    case DARK_THEME : return {...state,theme:'dark'}
    case LIGHT_THEME : return {...state,theme:'light'}
    default : return state;
  }
}

export default ThemeReducer;