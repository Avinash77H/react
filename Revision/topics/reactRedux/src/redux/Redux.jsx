import React from 'react'
import {createStore} from 'redux'
import { buy_item1,buy_item2 } from './actions'
import {useDispatch,useSelector} from 'react-redux'
import reducer from './reducer'
function Redux() {
  
  useSelector(state => console.log(state));
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className='header'>This is react Redux</h1>
      <button onClick={()=>dispatch(buy_item1())} className='btn'>buy_item1</button>
      <button onClick={()=>dispatch(buy_item2())} className='btn'>buy_item2</button>

    </div>
  )
}

export const store = createStore(reducer);

export default Redux
