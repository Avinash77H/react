import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function ErrorElement() {
  const nevigate = useNavigate();
  const handleGoBack = ()=>{
    nevigate(-1)
  }

  return (
  
      <div className=''>
        <h1 className='header'>Error</h1>
        <NavLink to="/"><button className='btn block'>Go To Home</button></NavLink>
        <button className='btn block' onClick={handleGoBack}>Go back</button>
      </div>
  
  )
}

export default ErrorElement
