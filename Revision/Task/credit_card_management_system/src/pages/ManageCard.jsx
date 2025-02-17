import React from 'react'
import { Outlet } from 'react-router-dom'

const ManageCard = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <Outlet/>
    </div>
  )
}

export default ManageCard
