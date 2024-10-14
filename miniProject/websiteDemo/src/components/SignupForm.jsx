import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}) {
  let [showPassword, setShowPassword] = useState(false);
  let [confirmShowPassword,setConfirmShowPassword] = useState(false)
  let navigate = useNavigate();
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("password do not match")
      return
    }
    setIsLoggedIn(true)
    toast.success("Account Created")
    const accountData = {
      ...formData,
    };
    console.log(accountData)
    navigate("/dashboard")
  }

  return (
    <div>
      

      <form onSubmit={submitHandler} className=" flex flex-col gap-2 ">
        {/* first name and last name */}
        <div className="flex flex-col gap-2">
          <label cla>
            <p>
              firstName<sup>*</sup>
            </p>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter first name"
              className="border border-gray-700 px-2 mt-1"
            />
          </label>

          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter last name"
              className="border border-gray-700 px-2 mt-1"
            />
          </label>
        </div>

        {/* email */}
        <label>
          <p>
            Email Addresh<sup>*</sup>
          </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email"
            className="border border-gray-700 px-2 mt-1"
          />
        </label>

        {/* password */}
        <div className="flex flex-col gap-2">
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <div className="relative inline">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Password"
              className="border border-gray-700 px-2 mt-1"
            />

            <span onClick={() => setShowPassword((prev) => !prev)} className="absolute top-1 right-1">
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            </div>
          </label>

          <label >
            <p>
              Confirm Password<sup>*</sup>
            </p>
           <div className="relative inline">
           <input
              required
              type={confirmShowPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              className="border border-gray-700 px-2 mt-1"
            />

            <span onClick={() => setConfirmShowPassword((prev) => !prev)} className="absolute top-1 right-1">
              {confirmShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
           </div>
          </label>
        </div>

        <button className="place-self-start bg-yellow-300 text-black font-semibold px-2 py-1 ml-2 mt-2">Create Account</button>
      </form>
    </div>
  );
}

export default SignupForm;
