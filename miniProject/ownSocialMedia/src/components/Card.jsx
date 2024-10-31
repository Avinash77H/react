import React, { useContext } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { ownContext } from '../store/data';

function Card({post}) {
  const {deletePost} = useContext(ownContext)
  return (
    <div className='border border-black flex flex-col gap-y-4 gap-x-4 p-4 relative'>
      <p>Name : {post.name}</p>
      <p>Age : {post.age}</p>
      <div className='absolute right-0 p-1 top-0 text-white bg-red-500 rounded-full grid place-self-center' onClick={()=>deletePost(post.id)}>
        <IoCloseSharp />
      </div>
    </div>
  )
}

export default Card
