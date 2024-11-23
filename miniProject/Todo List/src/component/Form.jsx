import React from 'react'
import { useState } from 'react';

function Form({addTodo}){
  const[inputValue,setInputValue] = useState({id:"",content:"",checked:false});

  const handleInput = (value)=>{
    setInputValue({id:value,content:value,checked:false});
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    addTodo(inputValue)
    setInputValue({id:"",content:"",checked:false}) // for empty input filed
  }
  return (
    <form onSubmit={handleFormSubmit}>
    <input type="text" placeholder='Enter Your Task' onChange ={(event)=>handleInput(event.target.value)} value={inputValue.content || "" } className='border border-gray-500 px-2 py-1 border-r-white focus:outline-none'/>
    <button type='submit' className='bg-purple-500 text-white px-4 py-1 rounded-r-md border border-gray-500 border-l-white'>Add</button>
  </form>
  )
}

export default Form
