
import { useState } from 'react';
import './App.css'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Clock from './component/Clock';



function App() {
  const[inputValue,setInputValue] = useState("");
  const[todo,setTodo] = useState([]);

  const handleInput = (value)=>{
    setInputValue(value);
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault()
    if(!inputValue) return;

    if(todo.includes(inputValue)){
      setInputValue("")
      return
    }

    setTodo((prev)=>[...prev,inputValue])
    setInputValue("")
  }
  
  return (
   <>
    <section className='flex flex-col gap-4'>
      <h1 className='text-3xl font-bold'>To Do App</h1>
      <Clock/>
      <section className='flex flex-col gap-4 items-center'>
        <form onSubmit={handleFormSubmit}>
          <input type="text" placeholder='Enter Your Task' onChange ={(event)=>handleInput(event.target.value)} value={inputValue} className='border border-gray-500 px-2 py-1 border-r-white focus:outline-none'/>
          <button type='submit' className='bg-purple-500 text-white px-4 py-1 rounded-r-md border border-gray-500 border-l-white'>Add</button>
        </form>
        <div>
          <ul>
           {todo.map((todo,index)=> <li key={index} className='flex gap-20 border border-gray-500 px-4 py-1 rounded-full items-center mt-4'>
              <span className='w-1/2'>{todo}</span>
              <div className='flex gap-4'>
              <button className='bg-green-500 rounded-full p-1 text-white'><FaCheck/></button>
              <button className='bg-red-500 rounded-full p-1 text-white'><MdDelete/></button>
              </div>
              </li>)}
          </ul>
        </div>
      </section>
    </section>
   </>
  )
}

export default App
