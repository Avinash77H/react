import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Help() {
  return (
    <>
    <div className='header'>Help</div>
    <div>
      <ul>
        <li><Link to="faq">Faq</Link> </li>
        <li><Link to="contact">Contact Us</Link></li>
      </ul>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default Help
