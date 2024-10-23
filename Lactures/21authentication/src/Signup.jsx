import React from 'react'
import {Formik,Form,Field,ErrorMessage}from "formik"
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { setFormDataFromLocalStorage } from './auth/auth'

function Signup() {
  const navigate = useNavigate()
  const initialValues = {
    username:"",
    email:"",
    password:""
  }

  const submitHandler = (values,{resetForm})=>{
    console.log(values)
    setFormDataFromLocalStorage(values)
    resetForm()
    navigate('/')
  }

  const validatationScheme = Yup.object().shape({
    username:Yup.string().required("Username is required"),
    email:Yup.string().email("Invalid Email").required("Email is required"),
    password:Yup.string().min(8,"Password must be atlease 8 character").required("password is required")
  })
  return (
    <div >
      <h1>This is Sign up page</h1>

      <div className='h-screen flex justify-center items-center'>
      <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={validatationScheme}>
       <Form className='flex flex-col gap-4'>
       <div>
        <label >UserName</label><br />
        <Field name="username" type="text" className="border border-black"></Field>
        <div className='text-red-500'>
        <ErrorMessage name='username' component="div"></ErrorMessage>
        </div>
        </div>

        <div>
          <label htmlFor="">Email</label><br />
          <Field name="email" type="email" className="border border-black"></Field>
         <div className='text-red-500'>
         <ErrorMessage name="email" component="div"></ErrorMessage>
         </div>
        </div>

        <div>
          <label htmlFor="" >Password</label><br />
          <Field name="password" type="password" className="border border-black"></Field>
          <div className='text-red-500'>
          <ErrorMessage name='password' component="div"></ErrorMessage>
          </div>
        </div>

        <button type='submit' className='btn place-self-center'>Sign up</button>
       </Form>
      </Formik>
      </div>
    </div>
  )
}

export default Signup
