import { Checkbox } from "@material-tailwind/react";
// import imgSrc from "../images/pic1.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Redux/Slice/UserSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../Redux/store";
import { useEffect } from "react";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // to avoid the navigation to login page
  const { user } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const SignSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required(" Name is Required"),
    email: Yup.string().email("Invalid email").required(" Email is Required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <div className="flex flex-col justify-center items-center w-screen gap-3">
      <div className=" py-36 md:px-48">
        <p className="font-bold text-lg text-start">Welcome back!</p>
        <p className="text-start">
          {" "}
          Enter your Credentials to access your account
        </p>

        {/* fields of form */}

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={SignSchema}
          onSubmit={(values) => {
            dispatch(signIn(values));
            navigate("/");
            console.log(values);
          }}
        >
          <Form>
            <div className="my-14 ">
              <label className="block text-gray-700 text-sm mb-2 font-bold  text-start">
                Name
              </label>
              <Field
                className="shadow  appearance-none border rounded w-96 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter Your Name"
              />
              <ErrorMessage
                name="name"
                className="text-red-500 text-sm"
                component="p"
              />
              <label className="block text-gray-700 text-sm font-bold mb-2 text-start my-10">
                Email Address
              </label>
              <Field
                className="shadow  appearance-none border rounded w-96 py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                name="email"
                placeholder="Enter Your Email Address"
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
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />

              <ErrorMessage
                name="password"
                className="text-red-500 text-sm"
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
                Sign Up
              </button>
              <div className="text-center">
                <p>or</p>
                <p>
                  Don’t have an account?{" "}
                  <span className="text-blue-700">
                    <a href="">Sign In</a>
                  </span>
                </p>
              </div>
            </div>
          </Form>
        </Formik>
      </div>

      {/* <div className="w-1/2 ">
        <img
          src={imgSrc}
          alt="no-image"
          className="w-full h-full object-cover"
        />
      </div> */}
    </div>
  );
};

export default SignUp;
