import React from 'react'

import Posts from './Posts'


function Sidebar() {
  return (
    <div className='w-1/6 bg-blue-100  h-screen flex flex-col gap-2 px-4'>
      <NavLink to="/posts"><button className='bg-blue-500 text-white px-2 py-1 rounded-md mt-12 '>Posts</button></NavLink>
      <NavLink to="/create post"><button className='bg-blue-500 text-white px-2 py-1 rounded-md'>Create Post</button></NavLink>
    </div>
  )
}

export default Sidebar
