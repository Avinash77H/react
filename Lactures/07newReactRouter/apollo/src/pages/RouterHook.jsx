import React from "react"
import {useNavigate} from 'react-router-dom'



function RouterHook() {
    const nevigate= useNavigate()
  return (
    <div>
      <button onClick={() =>{nevigate('/')}}> click for home</button>
    </div>
  )
}

export function Button(){
    return(
        <div>
            <button to='/'>click for home</button>
        </div>
    )
}

export default RouterHook
