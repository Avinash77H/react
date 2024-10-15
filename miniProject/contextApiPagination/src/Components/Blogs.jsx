import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';

function Blogs() {
  // consume 
  const {loading,posts} = useContext(AppContext);
  return (
   <div className='w-screen flex justify-center px-20'>
     <div className='flex flex-col gap-4 '>
      {
        loading ? (<Spinner/>) : (
          posts.length === 0 ? (<div>
            <p>No post Found</p>
          </div>) :(posts.map((post)=>(
            <div key={post.id}>
              <p className='font-bold'>{post.title}</p>
              <p>
                By<span>{post.author}</span> On <span className='font-semibold'>{post.category}</span>
              </p>
              <p>posted on {post.data}</p>
              <p>{post.content}</p>
              <div className='flex gap-4'>
                {post.tags.map((tag,index)=>{
                  return <span key={index} className='text-sky-600'>{`#${tag}`}</span>
                })}
              </div>
            </div>
          )))
        )
      }
    </div>
   </div>
  )
}

export default Blogs
