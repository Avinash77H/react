import React, { useContext } from 'react'
import context from '../Context/UserContext'

function Profile() {
  const {user} = useContext(context)
  return (
    <div>
        <h1>This is Profile Page</h1>
        <span>Profile Name:{user.name}</span>
       
    </div>
  )
}

export default Profile