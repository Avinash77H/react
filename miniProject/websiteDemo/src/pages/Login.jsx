import React from 'react'
import Template from '../components/Template'
import company1 from "../assets/company1.avif";


function Login({setIsLoggedIn}) {
  return (
   <Template
    title="Welcome Back"
    desc1 = "build skills for today,tomorrow,and beyond."
    desc2 = "Education to future-proof your career."
    image={company1}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default Login
