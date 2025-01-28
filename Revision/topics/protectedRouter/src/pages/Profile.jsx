import React from 'react'
import { useAuth } from '../Context/AuthContext';

function Profile() {
  const{authData,isAuth,currentUser,setIsAuth,setCurrentUser} = useAuth();

  function handleLogOut(){
    setIsAuth(false);
    setCurrentUser({});
  }

  console.log(currentUser);
  
  return (
    <div>
      <h1 className='header'>Profile page</h1>
      <div className='mt-8'>
        {Object.keys(currentUser).length === 0 ?<p className='text-center'>User Not Available</p>:<p>{currentUser.userName}</p>}
        
       {Object.keys(currentUser).length === 0?"": <button onClick={handleLogOut} className='btn'>Log Out</button>}
      </div>
    </div>
  )
}

export default Profile
