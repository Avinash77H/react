import React from 'react'


function Sidebar({togglePage,setTogglePage}) {
  return (
    <div className='w-1/6 bg-blue-100  h-screen flex flex-col gap-2 px-4 '>
      <p  onClick={()=>setTogglePage('posts')}><button className={`bg-blue-400 text-white px-2 py-1 rounded-md mt-12 ${togglePage === 'posts'? 'active':''}`}>Posts</button></p>
      <p onClick={()=>setTogglePage('createPost')}><button className={`bg-blue-400 text-white px-2 py-1 rounded-md ${togglePage === 'createPost'?'active':''}`}>Create Post</button></p>

    </div>
  )
}

export default Sidebar
