import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from '../redux/slices/CounterSlice';

function Counter() {
  const count = useSelector( (state)=> state.counter.value)
  const dispatch = useDispatch();
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex justify-center items-center gap-4'>
      <button onClick={()=>dispatch(decrement())} className='bg-red-500 text-white  px-2 py-1 rounded-md'>Decrement</button> 
      
      <div className='text-2xl '>{count}</div>
      <button onClick={()=>dispatch(increment())} className='bg-green-500 text-white px-2 py-1 rounded-md'>Increment</button>
      
      </div>
    </div>
  )
}

export default Counter
