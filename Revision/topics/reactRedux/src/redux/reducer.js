
const initialState = {
  item1 : 10,
  item2 : 15
}

const reducer = (state = initialState,action)=>{
  switch(action.type){
    case 'BUY_ITEM1': return {...state, item1 : state.item1 - 1}
    case 'BUY_ITEM2' : return {...state, item2 : state.item2 - 1}
    default : return state;
  }
}

export default reducer;