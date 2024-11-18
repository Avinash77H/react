
import { useMemo, useState } from 'react'
import './App.css'

// capture Phase , Target Phase , Bubble Phase

function App() {

const hadleGrandParendClick = (e)=>{
  console.log('Grandparent called')
}
const handleParentClick = (e)=>{
  console.log('Parent called')
}
const handleChildClick = ()=>{
  console.log('Child called')
}
  
  
  return (
    <>
      <div onClickCapture={hadleGrandParendClick} className='bg-red-500 p-4'>
        <div onClickCapture={handleParentClick} className='bg-green-500 p-4'>
          <button onClickCapture={handleChildClick} className='bg-violet-500 p-4'>click me</button>
        </div>
      </div>
    </>
  )
}

export default App
