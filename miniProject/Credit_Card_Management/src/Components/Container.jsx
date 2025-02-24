import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';

const Container = () => {

  // toggle sidebar on mobile screen
  const [isSide, setIsSide] = useState(false);

  return (
    <div className='flex flex-col'>
      <Navbar setIsSide={setIsSide} />
      <div className='flex'>
        <Sidebar isSide={isSide} className="border-2" />
        <Outlet />
      </div>
    </div>
  )
}

export default Container