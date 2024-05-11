// import React from 'react'
import imgSrc from "../images/pic1.jpg";
import { Checkbox } from "@material-tailwind/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { login } from "../Redux/Slice/UserSlice";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(" email is Required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex w-screen gap-3">
      <div className="w-1/2 py-32 px-48">
        <p className="font-bold text-lg text-start">Welcome back!</p>
        <p className="text-start">
          {" "}
          Enter your Credentials to access your account
        </p>

        {/* fields of form */}

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            dispatch(login(values));
            navigate("/");
            console.log(values);
          }}
        >
          <Form>
            <div className="my-14 ">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
                Email Address
              </label>
              <Field
                className="shadow appearance-none border rounded  w-96 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                placeholder="Enter Your Email"
              />
              <ErrorMessage
                name="email"
                className="text-red-500 text-sm"
                component="p"
              />

              {/* /password */}

              <label className="block text-gray-700 text-sm my-10 font-bold mb-2 text-start">
                PassWord
              </label>
              <Field
                className="shadow appearance-none border rounded  w-96 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="Enter Your Password"
              />
              <ErrorMessage
                name="password"
                className="text-red-500 text-sm "
                component="p"
              />
              <div>
                <Checkbox
                  label="Remember for 30 days"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  crossOrigin={undefined}
                />
              </div>

              <button className="my-7 w-96 bg-green-700 p-2 text-white rounded-xl">
                Login
              </button>
              <div className="text-center">
                <p>or</p>
                <p>
                  Don’t have an account?{" "}
                  <span className="text-blue-700">
                    <a href="">Sign Up</a>
                  </span>
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>

      <div className="w-1/2 ">
        <img
          src={imgSrc}
          alt="no-image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
