import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='w-full'>
      <Outlet/>
    </div>
  )
}

export default Dashboard