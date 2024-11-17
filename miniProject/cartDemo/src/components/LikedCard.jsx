import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { unLiked } from '../store/itemLikeSlice'

function LikedCard({item}) {
  const dispatch = useDispatch()
  const [text,setText] = useState(true)
  const description = text?item.description.substring(0,90):item.description

 

  return (
    <div className='flex flex-col gap-2 px-16 py-2 border border-gray-300 relative'>
        <div className='absolute right-8 top-4 text-3xl' onClick={()=>dispatch(unLiked(item.id))}>X</div>
        <img src={item.images} alt="" className='size-44'/>
         {/* <div>{description}  <span onClick={()=>setText(!text)} className='text-sky-500 cursor-pointer'>{text?'...Read More':'Less More'}</span></div> */}
         <p>{item.category}</p>
         <p>${item.price}</p>
         <div className='flex gap-1'>
            {item.tags.map((tag,index)=><span key={index}>#{tag}</span>)}
         </div>
         <div>
         <button className='bg-green-500 rounded-xl text-white px-2 py-1'>Add To Bag</button>
         </div>
    </div>
  )
}

export default LikedCard
