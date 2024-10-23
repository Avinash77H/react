import React, { useContext } from 'react'
import { useRef } from 'react'
import { PostList } from '../store/Post-list-store'

function CreatePost() {

  const{addPost} = useContext(PostList)

  const userIdElement = useRef()
  const postTitleElement = useRef()
  const postBodyElement = useRef()
  const reactionsElement = useRef()
  const tagsElement = useRef()

  const handleSubmit = (event)=>{
    event.preventDefault()
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/)
    addPost(userId,postTitle,postBody,reactions,tags)
  }

  return (
    <form className='create-post' onSubmit={handleSubmit}> 

    <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter Your User Id</label>
    <input type="text" className="form-control" id="userId" ref={userIdElement} placeholder='Enter Your User Id'/>
    </div>


    <div className="mb-3">
      <label htmlFor="title" className="form-label">Post Title</label>
      <input type="text" className="form-control" ref={postTitleElement} id="title" placeholder='How are you feeling today'/>
    </div>

    <div className="mb-3">
      <label htmlFor="body" className="form-label">Post Content</label>
      <textarea type="text" className="form-control" ref={postBodyElement} id="body" rows={4} placeholder='Tell us more about it'/>
    </div>

    <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <input type="text" className="form-control" ref={reactionsElement} id="usreactionserId" placeholder='How many people reacted to this post'/>
    </div>
    
    <div className="mb-3">
    <label htmlFor="tags" className="form-label">Enter Your hashtags</label>
    <input type="text" className="form-control" ref={tagsElement} id="tags" placeholder='Please enter tag using space'/>
    </div>

    <button type="submit" className="btn btn-primary">Post</button>
  </form>
  )
}

export default CreatePost
