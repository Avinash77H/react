import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { getFormDataFromLocalStorage } from "./auth/auth";

function Login() {
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    password: "",
  };
  const submitHandler = (values,{resetForm,isSubmitting, isError}) => {
    console.log(values)
    
    const user = getFormDataFromLocalStorage(values.email);
    if(user && values.password === user.password){
      localStorage.setItem('authenticate',true);
      resetForm() 
      navigate("/")
    }
    else{
      isError('invalid email or password')
    }
    isSubmitting(false)
    
  };
  const validatationScheme = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(8, "password minimum atleast 8 character")
      .required("password is required"),
  });
  return (
    <div>
      <h1>this is Login page</h1>
      <div className="h-screen flex justify-center items-center">
        <Formik
          initialValues={initialValues}
          onSubmit={submitHandler}
          validationSchema={validatationScheme}
        >
          <Form className="flex flex-col gap-4">
            <div>
              <label>Email</label>
              <br />
              <Field name="email" type="email" className="border border-black"></Field>
              <div className="text-red-500">
                <ErrorMessage name="email" component="div"></ErrorMessage>
              </div>
            </div>
            <div>
              <label>Password</label>
              <br />
              <Field name="password" type="password" className="border border-black"></Field>
              <div className="text-red-500">
                <ErrorMessage name="password" component="div"></ErrorMessage>
              </div>
            </div>

            <button className="btn place-self-center" type="submit" >Login</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
