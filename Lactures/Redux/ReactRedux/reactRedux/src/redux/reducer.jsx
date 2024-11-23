
const initialValue = {
  pen : 20,
  pencil : 10
}

 const reducer = (state=initialValue,action)=>{
  switch(action.type){
    case 'BUY_PEN': return {...state,pen:state.pen - 1}
    case 'BUY_PENCIL' : return{...state,pencil:state.pencil - 1}
    default : return state
  }
}

export const buy_pen = ()=>{
   return {type:'BUY_PEN'}
}

export const buy_pencil = ()=>{
  return  { type:'BUY_PENCIL'}
}

export default reducer;