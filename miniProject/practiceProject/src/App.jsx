import './App.css'
import InputTodo from './components/inputTodo'
import TodoContainer from './components/TodoContainer'
import { useState } from 'react'
function App() {
  const [todo,setTodo] = useState([])

  const handleChange = (value)=>{
    setTodo((prev) =>{
      return [...prev,value]
    })
  }


  return (
    <div className='flex items-center flex-col mt-12'>
      <InputTodo handleChange={handleChange} todo={todo}/>
      <TodoContainer todo={todo} setTodo={setTodo}/>
    </div>
  )
}

export default App
