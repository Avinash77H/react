import React from 'react'
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';

function SignUP() {
  const[userData,setUserData] = useState({userName:"",userPassword:""})
  const{isAuth,setIsAuth,authData,setAuthData,setCurrentUser} = useAuth();
  console.log("authData",authData);

  function handleSubmit(e){
    e.preventDefault();
   setAuthData((prev)=>[...prev,userData]);
  setCurrentUser(userData);
    setIsAuth(true);
  
  }
  return (
    <div>
      <h1 className='header'>Sign Up page</h1>
      <div>
        <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id='name' placeholder='Enter Your Name' className='border border-black' onChange={(e)=>setUserData((prev)=>({...prev,userName:e.target.value}))}/>
         </div>
         <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' placeholder='Enter Your Name' className='border border-black' onChange={(e)=>setUserData((prev)=>({...prev,userPassword:e.target.value}))}/>
         </div>
         <button className='bg-green-500 text-white px-2 py-1 rounded-md'>Sign UP</button>
        </form>
      </div>
    </div>
  )
}

export default SignUP
