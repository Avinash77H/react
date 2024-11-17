
import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const[count,setCount] = useState(0)
  const[input,setInput] = useState(0)

  const doubleCounter = (num)=>{
    console.log('inside doubleCounter')
    for(let i = 0; i <= 1000000000; i++){}
    return num * 2
  }

  // const answer = doubleCounter(input)

  const answer = useMemo(()=>doubleCounter(input),[input])
  
  return (
    <>
      <button onClick={()=>setCount(count+1)} className='border border-green-500 px-2 py-1'>
        Increment
      </button>
      <p>counter:{count}</p>
      <input type="number" placeholder='enter input' value={input} onChange={(e)=>setInput(e.target.value)} className='text-center border-2 border-gray-500'/>
      <p>Double:{answer}</p>
    </>
  )
}

export default App
