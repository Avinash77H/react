import React from 'react'
import company2 from "../assets/company2.jfif";
import Template from '../components/Template';

function SignUP({setIsLoggedIn}) {
  return (
    <Template
    title="Join the millions learning to code with studyNotion for free"
    desc1 = "build skills for today,tomorrow,and beyond."
    desc2 = "Education to future-proof your career."
    image={company2}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
   />
  )
}

export default SignUP
