import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function User() {
    const {user} = useAuth0()
   console.log(user)
  return (
    <div className='h-screen flex justify-center items-center '>
    <div className='flex flex-col gap-4 items-center'>
    <div className='size-20 rounded-full border border-black'>
    <img src={user.picture} alt="" className='rounded-full'/>
    </div>
    <p className='font-3xl font-semibold'>User Name : {user.name}</p>
    <p className='font-3xl font-semibold'>User Email : {user.email}</p>
    </div>
    </div>
  )
}

export default User
