import React from 'react'
import {Outlet } from 'react-router-dom'

function CareerLayout() {
  return (
    <>
        <div className='header'>CareerLayout</div>
        
        <Outlet/>
    </>
  )
}

export default CareerLayout
