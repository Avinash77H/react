import React from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import * as Yup from 'yup';

function DemoForm3() {
    const initialValues = {
        userName: "",
        email: "",
        password: "",
        confirm_password: ""
    };

    const onSubmit = (values,{resetForm}) => {
        console.log(values);
        resetForm()
    };

    const userSchema = Yup.object({
        userName: Yup.string()
            .min(3, "Username must be at least 3 characters")
            .max(25, "Username cannot exceed 25 characters")
            .required("Required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Required"),
        password: Yup.string()
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number, and One Special Character"
            )
            .required('Enter your password'),
        confirm_password: Yup.string()
            .required('Required')
            .oneOf([Yup.ref("password"), null], "Passwords must match")
    });

    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Sign Up</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={userSchema}>
                <Form className='flex flex-col gap-4 mt-4'>
                    <div>
                        <label htmlFor="userName">UserName:</label><br />
                        <Field type="text" name='userName' placeholder='Username' className="border border-gray-500"/>
                        <div className='text-red-500'>
                            <ErrorMessage name='userName' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label><br />
                        <Field type="email" name='email' placeholder='Email' className="border border-gray-500"/>
                        <div className='text-red-500'>
                            <ErrorMessage name='email' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label><br />
                        <Field type="password" name='password' placeholder='Password' className="border border-gray-500"/>
                        <div className='text-red-500'>
                            <ErrorMessage name='password' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="confirm_password">Confirm Password:</label><br />
                        <Field type="password" name='confirm_password' placeholder='Confirm Password' className="border border-gray-500"/>
                        <div className='text-red-500'>
                            <ErrorMessage name='confirm_password' />
                        </div>
                    </div>
                    <button type='submit' className='text-white bg-sky-500 px-2 py-1'>SIGN UP</button>
                </Form>
            </Formik>
        </div>
    );
}

export default DemoForm3;
