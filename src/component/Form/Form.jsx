import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import YupPassword from 'yup-password';
import "./Form.css"

const CustomForm = () => {

  YupPassword(yup);

  const formValidationSchema = yup.object().shape({
    name: yup.string().required("Name Can't Be Blank"),
    email: yup.string().required("Email Can't Be Blank").email("Please Enter Valid Email"),

    mobNumber: yup.string().length(10).required("MobNumber Can't Be Blank"),

    password: yup.string().min(8).max(16).required("Password Can't Be Blank").minLowercase(1,"Min 1 Lowercase Letter Is Required").minUppercase(1,"Min 1 Uppercase Letter Is Required").minNumbers(1,"Min 1 Digit Is Required").minSymbols(1,"Min 1 Special Character Is Required "),

    confirmpassword: yup.string().required("confirmpassword Can't Be Blank")
    .oneOf([yup.ref("password")], "Password Must Match"),

  });

  return (
    <Formik initialValues={{
      name: "",
      email: "",
      mobNumber: "" ,
      password: "",
      confirmpassword: "",
    }}

      validationSchema={formValidationSchema}

      onSubmit={(data) => {
        //  console.log(data.confirmpassword === data.password)
        console.log(data);
      }}
    >
      <Form className='container'>
        <h1>Form Handling</h1>

        <Field type="text" name="name" placeholder="Enter Your Name" />
        <p className='errorLine'><ErrorMessage name="name" /></p>

        <Field type="text" name="email" placeholder="Enter Your Email " />
        <p className='errorLine'><ErrorMessage name="email" /></p>

        <Field type="password" name="password" placeholder="Enter Your Password" />
        <p className='errorLine'><ErrorMessage name="password" /></p>

        <Field type="password" name="confirmpassword" placeholder="Enter Confirm Password" />
        <p className='errorLine'><ErrorMessage name="confirmpassword" /></p>

        <Field type="number" name="mobNumber" placeholder="Enter Your mobNumber" />
        <p className='errorLine'><ErrorMessage name="mobNumber" /></p>

        <Field type="submit" value="Submit" className='butn' />
      </Form>

    </Formik>
  )
}

export default CustomForm;