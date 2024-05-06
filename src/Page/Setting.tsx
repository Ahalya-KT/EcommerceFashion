import { IoLockClosedOutline } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

function Setting() {
  return (
    <div className="py-40 px-24 flex flex-col justify-center items-center ">
      <div>
        <IoLockClosedOutline
          size={50}
          className="bg-blue-gray-100 p-2 rounded-full text-blue-400 "
        />
      </div>

      <div className="py-4">
        <p className="font-bold text-xl text-center">Change Password</p>
        <p className="text-sm text-center">
          Update your profile information below.
        </p>

        <div className=" py-10 flex flex-col gap-3">
          <div className="flex flex-col">
            <div className="mt-2">
              <label className="text-base">Current Password</label>
            </div>

            <div className="flex relative">
              <input
                type="password"
                placeholder="Enter your Current Password"
                className="border-solid border-2 border-gray-300 mt-3 p-2 rounded-lg w-96"
              />
              <div className="absolute ol top-6 right-8">
                <FaEye />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-2">
              <label className="text-base">New Password</label>
            </div>

            <div className="flex relative">
              <input
                type="password"
                placeholder="Enter your New Password"
                className="border-solid border-2 border-gray-300 mt-3 p-2 rounded-lg w-96"
              />
              <div className="absolute top-6 right-8">
                <FaEye />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-2">
              <label className="text-base">Confirm New Password</label>
            </div>

            <div className="flex relative">
              <input
                placeholder="Confirm password"
                type="password"
                className="border-solid border-2 border-gray-300 mt-3 p-2 rounded-lg w-96"
              />
              <div className="absolute top-6 right-8">
                <FaEye />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 ">
        {/* <button className="bg-light-blue-600 p-3 text-white rounded-lg">
          EDIT
        </button> */}
        <button className="bg-light-blue-600 p-3 text-white rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Setting;
