const noOfPen = {
  pen:10
}
const noOfPencil = {
  pencil:20
}

export const penReducer = (state = noOfPen,action)=>{
  if(action.type === 'BUY_PEN'){
    return{ pen:state.pen - 1}
  }
  return state
}
export const pencilReducer = (state = noOfPencil,action)=>{
  if(action.type === 'BUY_PENCIL'){
    return{ pencil:state.pencil - 1}
  }
  return state
}
