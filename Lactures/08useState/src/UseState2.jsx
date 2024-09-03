import {useState} from 'react'
import React from 'react'

function UseState2() {

    const [count,setCount] =useState(0)

    const increase = () =>{ 
        console.log('increase')
        return setTimeout(()=> setCount(num => num + 1),2000)
    }

    const decrease = () =>{
       if(count > 0){
        console.log('decrease')
        return setTimeout(() => setCount(num => num - 1),2000)
       }
     
    }


  return (
       <>
        <p>Asycronous </p>
         <p>count is:{count}</p>
        <button onClick={increase} className='border-2 border-green-500 bg-green-500 text-white '>increament</button>
        <button onClick={decrease} className='border-2 border-red-500 bg-red-500 text-white'>decrement</button>
       </>
  )
}

export default UseState2