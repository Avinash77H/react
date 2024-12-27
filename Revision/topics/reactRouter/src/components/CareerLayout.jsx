import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function CareerLayout() {
  return (
    <>
        <div className='header'>CareerLayout</div>
        <div>
          <Link to="/">Career</Link>
        </div>
        {/* <Outlet/> */}
    </>
  )
}

export default CareerLayout
