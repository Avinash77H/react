import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import {PostList } from '../store/Post-list-store';

function Post({post}) {
  const {deletePost} = useContext(PostList)
  return (
    <div className="card post-card" style={{width: "25rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span onClick={()=>deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <MdDelete />
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((tag,index)=>(
      <span key={index} className="badge text-bg-primary hastag">{tag}</span>
    ))}
    <div className="alert alert-success reactions" role="alert">
    This post has been reacted by {post.reactions}
</div>
  </div>
</div>
  )
}

export default Post