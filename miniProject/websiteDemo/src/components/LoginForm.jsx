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
    <form onSubmit={submitHandler}>
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
        />
      </label>

      <label>
        <p>
          Password<sub>*</sub>
        </p>
        <input
          type={showPassword?("text"):("password")}
          name="password"
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
        />

        <span onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?<AiOutlineEyeInvisible/>:<AiOutlineEye/>}</span>

        <Link to="#">
        <p>Forgot Password</p>
        </Link>
      </label>

      <button >Sign In</button>
    </form>
  );
}

export default LoginForm;
