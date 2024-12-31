import React from 'react'

function Card({item}) {
  return (
   
        <div className='border border-gray-500 shadow-xl flex flex-col items-center'>
            <img src={item.thumbnail} alt="image" className='size-40'/>
            <div>
                <p className='text-center'>{item.title}</p>
            </div>
        </div>
  
  )
}

export default Card