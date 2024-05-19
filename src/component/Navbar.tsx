import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { logout } from "../Redux/Slice/UserSlice";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT US", link: "/contactUs" },
  ];

  const [isOpen, setOpen] = useState(false);
  // state to track login status

  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.user);

  // function to logout
  const handleLogout = () => {
    dispatch(logout());
  };

  // state to list dropdown
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div className=" w-full bg-white fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 md:px-10 py-3 flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center">
          <img src={logo} width={60} />
          <span className="font-bold">NorthStar</span>
        </div>
        {/* menu icon */}
        <div
          onClick={() => setOpen(!isOpen)}
          className="absolute right-8 top-6 md:hidden"
        >
          {isOpen ? <RxCross2 /> : <IoIosMenu />}
        </div>

        {/* nav link */}
        <div className="flex  ">
          <ul
            className={`md:flex pl-9 md:pl-0 md:items-center  md:static md:pb-0 pb-12 absolute w-full transition-all duration-500 ease-in ${
              isOpen ? "top-16" : "top-[-490px] "
            }`}
          >
            {Links.map((link) => (
              <li className="my-7 md:my-0 md:ml-12 ml-3 text-sm font-semibold  ">
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {!user && (
          <div className="flex gap-6 font-bold ">
            <Link to="/login" className="cursor-pointer">
              Login
            </Link>
            <Link to="/signUp" className="cursor-pointer">
              Sign Up
            </Link>
          </div>
        )}

        {user && (
          <div className="flex gap-5 ">
            <button>
              <Link to={"/"}>
                <IoMdHome />
              </Link>
            </button>

            <button>
              {" "}
              <Link to={"/cart"}>
                {" "}
                <FaShoppingCart />
              </Link>
            </button>

            <button>
              <FaHeart />
            </button>

            <div className="relative">
              <div>
                <button onClick={handleDropdown}>
                  <IoPersonSharp />
                </button>
              </div>

              {showDropDown && (
                <div className="absolute top-9 bg-gray-50 p-5 rounded-lg shadow-md flex flex-row items-center">
                  <button onClick={handleLogout}>
                    <RiLogoutCircleRLine />
                  </button>
                  <span className="ml-2">logout</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
