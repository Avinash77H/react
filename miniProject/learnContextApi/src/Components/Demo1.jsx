import React, { useContext } from 'react'
import { MyContext } from '../Context/AppContext'

function Demo1() {
    const{name,age,sum,theme,setTheme} = useContext(MyContext)
    const answer = sum(5,7)
  return (
    <div className= {theme === 'light'?'h-screen bg-white text-black':'h-screen bg-black text-white'}>
      <p>my name is{name} and i am {age} old</p>
        <p>5 and 7 total is:{answer}</p>
        <div>
            <button onClick={()=>setTheme('light')}>light</button>
            <button onClick={()=>setTheme('dark')}>dark</button>
        </div>
    </div>
  )
}

export default Demo1
