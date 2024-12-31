import React from 'react'
import { useNavigate } from 'react-router-dom';

function Order() {
  const nevigate = useNavigate();
  return (
    <div>
    <form action="" className='mt-4 ml-4'>
      <label htmlFor="order">Enter Order: </label>
      <input type="text" className='border border-gray-500' />
      <br />
      <button className='btn btn-success mt-4' onClick={()=>nevigate("/home")}>Submit</button>
    </form>
  </div>  
  )
}

export default Order
