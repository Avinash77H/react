import {ADD_INITIALDATA, ADD_LIKE,REMOVE_LIKE} from './Constant'


const inititalState = {
  product : [],  
  add_like : [],
}

const Reducer = (state = inititalState,action)=>{
  switch(action.type){
    case ADD_INITIALDATA:{
      return {...state,product:action.payload}
    }
    case ADD_LIKE: {
      return {...state,add_like:[...state.add_like,action.payload]}
    }
    case REMOVE_LIKE:{
      return {
        ...state,addLike:state.add_like.filter((id)=> id !== action.payload)
      }
    }
    default : return state;
  }
}

export default Reducer