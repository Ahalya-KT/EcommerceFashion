// import React from 'react'
import imgSrc from "../images/pic1.jpg";
import { Checkbox } from "@material-tailwind/react";

const Login = () => {
  return (
    <div className="flex w-screen gap-3">
      <div className="w-1/2 py-32 px-48">
        <p className="font-bold text-lg text-start">Welcome back!</p>
        <p className="text-start">
          {" "}
          Enter your Credentials to access your account
        </p>

        {/* fields of form */}

        <form>
          <div className="my-14 ">
            <label className="block text-gray-700 text-sm font-bold mb-2 text-start">
              Email Address
            </label>
            <input
              className="shadow  appearance-none border rounded w-96 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter Your Email Address"
            />

            {/* /password */}

            <label className="block text-gray-700 text-sm my-10 font-bold mb-2 text-start">
              PassWord
            </label>
            <input
              className="shadow appearance-none border rounded  w-96 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter Your Password"
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
        </form>
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
