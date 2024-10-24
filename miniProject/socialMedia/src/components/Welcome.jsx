import React, { useContext } from 'react'

function Welcome({onGetPostsClick}) {
  return (
   <div className='flex flex-col items-center gap-4'>
     <h1 className=' font-bold text-purple-500 text-4xl mt-20'>There are no posts</h1>
     <button onClick={onGetPostsClick} className='bg-green-500 text-white px-2 py-1 rounded-md'>Get Posts From Server</button>
   </div>
  )
}

export default Welcome
