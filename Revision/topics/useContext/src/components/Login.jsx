import React, { useContext, useState } from 'react'
import context from '../Context/UserContext';


function Login() {
  const[name,setName] = useState("");
  const[password,setPassword] = useState("");
  const{setUser}= useContext(context);

  function handleSubmit(){
    setUser({name,password})
  }

  return (
    <div>
      <br />
       <label htmlFor="userName">Input:</label>
        <input type="text" placeholder='Enter Your name' name="userName" onChange={(e)=>setName(e.target.value)} className='border-2 border-gray-500'/><br/><br />
      <label htmlFor="password">Password:</label>
        <input type="password" placeholder='Password' name="password" onChange={(e)=>setPassword(e.target.value)} className='border-2 border-gray-500'/><br/><br />
      <button onClick={handleSubmit} className='bg-green-500 text-white px-2 py-1 rounded-xl'>Submit</button>
    </div>
  )
}

export default Login;