import React, { useState } from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { liked, unLiked } from '../store/itemLikeSlice';

function Card({item}) {
  const dispatch = useDispatch()
  const like = useSelector((state)=>state.like)
  const isLike = like.includes(item.id)
  
  const [text,setText] = useState(true)
  const description = text?item.description.substring(0,90):item.description
  const handleLike = ()=>{
    dispatch(liked(item.id))
  }
  const handleDislike = ()=>{
    dispatch(unLiked(item.id))
  }
  return (
    <div className='flex flex-col gap-2 px-16 border border-gray-300 relative'>
        <div className='absolute right-8 top-4'>{isLike?<FcLike onClick={handleDislike} className='size-8'/>:<FcLikePlaceholder onClick={handleLike}  className='size-8'/>}</div>
        <img src={item.images} alt="" className='size-44'/>
         <div>{description}  <span onClick={()=>setText(!text)} className='text-sky-500 cursor-pointer'>{text?'...Read More':'Less More'}</span></div>
         <p>{item.category}</p>
         <p>${item.price}</p>
         <div className='flex gap-1'>
            {item.tags.map((tag,index)=><span key={index}>#{tag}</span>)}
         </div>
         
    </div>
  )
}

export default Card
