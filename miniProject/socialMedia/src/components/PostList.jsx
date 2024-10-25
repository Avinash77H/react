import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData} from '../store/Post-list-store'
import Welcome from './Welcome'
import Loader from './Loader'


function PostList() {
  const {postList,addInitialPosts} = useContext(PostListData)
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    const controller = new AbortController();
    const signal =controller.signal
    console.log(signal)
     fetch('https://dummyjson.com/posts',{signal})
    .then((res)=>res.json())
    .then((data)=>{
      addInitialPosts(data.posts)
      setLoading(false)
    })

    return()=>{
      controller.abort()
    }
  },[])

  return (
    <div className=''>
      
      {loading && <Loader/>}
      {!loading && postList.length === 0 &&<Welcome/>}
      {!loading && postList.map((post)=>(
        <Post key={post.id} post={post}/>
      ))}
      {}
      
    </div>
  )
}

export default PostList
