import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Item1,Item2,Cake,Choco } from '../redux/Actions'
function Home() {
  const dispatch = useDispatch()

  const item1 = useSelector(state=>state.reducer1.item1);
  const item2 = useSelector(state=>state.reducer1.item2);
  const cake = useSelector(state =>state.reducer2.cake);
  const choco = useSelector(state=>state.reducer2.choco);
  return (
    <div>
      <div>
        <p>item1 : {item1}</p>
        <p>item2 : {item2}</p>
        <p>cake : {cake}</p>
        <p>choco : {choco}</p>
    
      </div>
      <button className='btn' onClick={()=>dispatch(Item1())}>Buy Item 1</button>
      <button className='btn' onClick={()=>dispatch(Item2())}>Buy Item 1</button>
      <button className='btn' onClick={()=>dispatch(Cake())}>Buy Cake</button>
      <button className='btn' onClick={()=>dispatch(Choco())}>Buy Choco</button>
    </div>
  )
}

export default Home
