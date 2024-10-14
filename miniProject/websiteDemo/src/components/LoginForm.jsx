import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm({setIsLoggedIn}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard")
  }
  return (
    <form onSubmit={submitHandler} className=" flex flex-col gap-4">
      <label>
        <p>
          Email Address<sup>*</sup>
        </p>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          className="border border-gray-700 px-2 mt-1"
        />
      </label>

      <label className="">
        <p>
          Password<sup>*</sup>
        </p>
 
       <div className="relative inline">
       <input
          type={showPassword?("text"):("password")}
          name="password"
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          className="border border-gray-700 px-2 mt-1"
        />

        <span onClick={()=>setShowPassword((prev)=>!prev)} className="absolute right-4 pt-2">{showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}</span>
       </div>
      

        <Link to="#">
        <p className="text-[12px] text-blue-700 ml-28">Forgot Password</p>
        </Link>
      </label>

      <button className="place-self-start bg-yellow-300 text-black font-semibold px-2 py-1 ml-2">Sign In</button>
    </form>
  );
}

export default LoginForm;
