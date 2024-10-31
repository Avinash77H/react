import React, { useContext } from 'react'
import { ownContext } from '../store/data'
import Card from './Card'

function Posts() {
  const {postList} = useContext(ownContext)
  return (
    <div className=' grid grid-cols-3 gap-x-4 gap-y-4'>
      {postList.length === 0 ?<h1>Posts are not available</h1>:postList.map((post)=>(
        <Card key={post.id} post={post}/>
      ))}
    </div>
  )
}

export default Posts
