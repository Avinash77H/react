import React from 'react'
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const{currentUser,setIsAuth,setCurrentUser} = useAuth();
  const nevigate = useNavigate();

  function handleLogOut(){
    setIsAuth(false);
    setCurrentUser({});
    nevigate('/login');
  }

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
