import React, { useState } from "react";
import {useFormik} from 'formik'
import { signUpSchema } from "../schemas";

function Form() {
  let initialValues = {
    firstName: "",
    email: "",
    password: "",
  };

  let onSubmit = (values,{reset}) =>{
    console.log(values)
    console.log('hello')
    resetForm()
  }

  // let validate = (values) =>{
  //   const error = {}
  //   if(!values.firstName){
  //     error.firstName = 'Required'
  //   }
  //   if(!values.email){
  //     error.email = 'Required'
  //   }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
  //     error.email = 'Invalid email Addresh'
  //   }
  //   if(!values.password){
  //     error.password = 'Required'
  //   }
  //   return error;
  // }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema:signUpSchema
  //  validate
  })



  return (
    <div className="w-screen h-screen flex justify-center items-center bg-green-100">
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
        <div>
          <label htmlFor="firstName">FirstName:</label>
          <br />
          <input
            onChange={formik.handleChange}
            value={formik.values.firstName}
            type="text"
            name="firstName"
            id='firstName'
            className="border border-gray-400 pl-2 py-1"
          />
          {/* {formik.errors.firstName && formik.touched.firstName ?<p>{formik.errors.firstName}</p>:null} */}
          {formik.errors.firstName?<div>{formik.errors.firstName}</div>:null}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            name="email"
            id='email'
            className="border border-gray-400 pl-2 py-1"
          />
          {/* {formik.errors.email && formik.touched.email ?<p>{formik.errors.email}</p>:null} */}
           {formik.errors.email?<div>{formik.errors.email}</div>:null}
        </div>

        <div>
          <label htmlFor="password">password:</label>
          <br />
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            name="password"
            id='password'
            className="border border-gray-400 pl-2 py-1"
          />
          {/* {formik.errors.password && formik.touched.password ?<p>{formik.errors.password}</p>:null} */}
           {formik.errors.password?<div>{formik.errors.password}</div>:null}
        </div>

        <button  type="submit " className="text-white bg-purple-400 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
