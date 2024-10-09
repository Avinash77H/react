import React, { useState } from 'react'

function Form() {
    let info = {
       firstName:"",
       email:"",
       password:""

    }
    
    console.log(info)
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-green-100'>
      <form action="" className='flex flex-col gap-8'>
        <div>
            <label htmlFor="firstName">FirstName:</label><br />
            <input onChange={
                (e)=>{
                 info =  {...info,firstName:e.target.value}
                    console.log(info)
                } 
                } type="text" name='firstName' className='border border-gray-400 pl-2 py-1'/>
        </div>

        <div>
            <label htmlFor="email">Email:</label><br />
            <input type="email" name="email"  className='border border-gray-400 pl-2 py-1'/>
        </div>

        <div>
            <label htmlFor="password">password:</label><br />
            <input type="password" name="password" className='border border-gray-400 pl-2 py-1'/>
        </div>
        
        <button type='submit ' className='text-white bg-purple-400 py-2'>Submit</button>

      </form>
    </div>
  )
}

export default Form
