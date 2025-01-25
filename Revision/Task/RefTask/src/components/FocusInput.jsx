import React from 'react'
import { useState,useRef } from 'react';

function FocusInput() {
    const[focus,setFocus] = useState(false);
    const inputField = useRef();
    
    function handleClick(){
      if(focus){
        setFocus(!focus);
      }
      else{
        setFocus(true)
        inputField.current.focus()
      }
    }
  return (
    <div>
      <label >Name:</label>
      <input type="text" className='border-2 border-gray-300' ref={inputField}/><br/>
      <button onClick={handleClick} className='btn'>Cute btn</button>
    </div>
  )
}

export default FocusInput




