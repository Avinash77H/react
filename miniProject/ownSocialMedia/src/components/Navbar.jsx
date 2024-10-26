import React from 'react'

function Navbar() {
  return (
    <div className=' w-full h-12'>
      <nav>
        <ul className='flex justify-evenly bg-green-200 py-2'>
          <li>Home</li>
          <li>Shop</li>
          <li>Store</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
