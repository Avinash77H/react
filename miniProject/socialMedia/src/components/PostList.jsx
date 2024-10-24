import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData} from '../store/Post-list-store'
import Welcome from './Welcome'

function PostList() {
  const {postList,addInitialPosts} = useContext(PostListData)
  const onGetPostsClick = ()=>{

    fetch('https://dummyjson.com/posts')
    .then((res)=>res.json())
    .then((data)=>{
      addInitialPosts(data.posts)
    })
  }
  console.log(postList)
  return (
    <div className=''>
      {postList.length === 0 &&<Welcome onGetPostsClick={onGetPostsClick}/>}
      {postList.map((post)=>(
        <Post key={post.id} post={post}/>
      ))}
    </div>
  )
}

export default PostList
