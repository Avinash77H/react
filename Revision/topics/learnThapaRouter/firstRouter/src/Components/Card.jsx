import React from 'react'

function Card({item}) {
  return (
    <div className='shadow-2xl'>
      <img src={item.Poster} alt="" className='size-40 mx-auto'/>
      <p className='text-center'>{item.Title}</p>
    </div>
  )
}

export default Card
