import React from 'react'
import { useNavigate } from 'react-router-dom';

function MovieDetailsCard({item}) {
  const nevigate = useNavigate()
  
  const {Poster,Title,Released
    ,imdbRating
  } = item;
  return (
    <div className='flex flex-col items-center mt-2'>
      <img src={Poster} alt="" />
      <p className='text-2xl'>Movie Name: {Title}</p>
      <p className='text-xl'>Released: {Released}</p>
      <p className='text-xl'>imdbRating
      : {imdbRating
      }</p>
     <button className='btn' onClick={()=>nevigate(-1)}>Go Back </button>
   
    </div>
  )
}

export default MovieDetailsCard
