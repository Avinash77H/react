import React from 'react'
import { useState } from 'react'

function InputTodo({handleChange,todo}) {

  const [inputValue,setInputValue] = useState({id:"",content:"",checked:false})
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(!inputValue.content) return;
    const sameItem = todo.some((todo)=>todo.content === inputValue.content)
    if(sameItem){
      setInputValue({id:"",content:"",checked:false})
      return ;
    }
    // if(todo.includes(inputValue)){
    //   setInputValue("")
    //   return;
    // };
    handleChange(inputValue);
    setInputValue({id:"",content:"",checked:false})
  }
  return (
    <div>
      <form className='flex gap-2' onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Task' className='border-2 border-gray-500 px-2' value={inputValue.content} onChange={(event)=>setInputValue((prev)=>({...prev,content:event.target.value}))}/>
        <button type='submit' className='text-white bg-purple-500 px-2 py-1 rounded-md'>Add</button>
      </form>
    </div>
  )
}

export default InputTodo
