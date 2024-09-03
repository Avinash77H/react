import React from 'react'
import { useState } from 'react'

function UseState() {
    const [count,setCount] =useState(0)

    const increase = () =>{ 
        setCount(count + 1);
    }

    const decrease = () =>{
        setCount(count - 1)
    }

  return (
    <>
        <h1>count is :{count}</h1>
        <button onClick={increase} className='border-2 border-green-500 bg-green-500 text-white '>increament</button>
        <button onClick={decrease} className='border-2 border-red-500 bg-red-500 text-white'>decrement</button>
    </>
  )
}

export default UseState