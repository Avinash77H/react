import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Details() {
  return (
    <div>
      <h1 className='header text-white'>This is Details Page</h1>
      
      <Outlet/>
    </div>
  )
}

export default Details
