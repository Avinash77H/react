import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData} from '../store/Post-list-store'

function PostList() {
  const {postList} = useContext(PostListData)
  return (
    <div className=''>
      {postList.map((post)=>(
        <Post key={post.id} post={post}/>
      ))}
      
    </div>
  )
}

export default PostList
