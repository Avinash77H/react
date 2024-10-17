import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
  const count = useSelector((state)=> state.counter.value);
  return (
    <div>
      <button>increment</button><br />
      <div>{count}</div><br />
      <button>decrement</button>
    </div>
  )
}

export default Counter
