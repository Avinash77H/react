import React, { useEffect, useState } from 'react'

function Counter() {
  const [isRun,setIsRun] = useState(false);
  const [inputValue,setInputValue] = useState('');
  const [theme,setTheme] = useState('bg-white');
  const [count,setCount] = useState(0);

  useEffect(()=>{
    const id = setInterval(()=>{
      if(isRun && count > 0){
        setCount((prev)=>prev - 1);
      }
      else if(count == 0){
        setIsRun(false)
        setTheme('bg-white')
      }
    },1000)

    return ()=>{
      clearInterval(id)
    }
  },[isRun,count])

  function handleStart(){
    if(inputValue){
      setIsRun(true)
      setTheme('bg-black')
      // setInputValue('')
    }
  }

  function handlePause(){
    setIsRun(false)
  }

  function handleReset(){
    setCount(0)
    setTheme('bg-white')
  }
 
  function handleInput(e){
    const value = parseFloat(e.target.value ) ;
    setInputValue(value)
    setCount(value)
  }

  

  const minute = Math.floor(count / 60).toString().padStart(2,'0');
  const second = (count % 60).toString().padStart(2,'0');

  return (
    <div className={`${theme} h-screen flex flex-col items-center justify-center  gap-4 `}>
      <h1 className='heading'>Counter</h1>
      <div >
        <input type="number" placeholder='Enter Time' className='border border-gray-500 px-2 text-black bg-white' value={inputValue}  onChange={(e)=>handleInput(e)} disabled={isRun}/>
        <p className={`${theme === 'bg-black'?'text-white': 'text-black'} text-center mt-4 text-2xl `}>{minute + ":" + second}</p>
        <div className='flex gap-4 mt-4'>
          <button className='btn bg-green-500' onClick={handleStart} disabled={isRun}>Start</button>
          <button className='btn bg-red-500' onClick={handlePause}>Pause</button>
          <button className='btn bg-purple-500' onClick={handleReset}>Reset</button>
          {/* <button className='btn bg-black' onClick={handleTheme}>Theme</button> */}
        </div>
      </div>
    </div>
  )
}

export default Counter