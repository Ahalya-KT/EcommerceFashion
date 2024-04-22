import { GiLargeDress } from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT US", link: "/" },
  ];
  const [isOpen, setOpen] = useState(false);

  return (
    <div className=" w-full">
      <div className="md:px-10 py-6 px-7 md:flex fixed top-0 left-0 w-full justify-between ">
        <div className="flex text-2xl cursor-pointer items-center gap-1">
          <GiLargeDress className="w-7 h-7 text-pink-200" />
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
                <a href="/about">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6 font-bold">
          <Link to="login" className="cursor-pointer">
            Login
          </Link>
          {/* <p className="cursor-pointer">Sign Up</p> */}
          <Link to="/signUp" className="cursor-pointer">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
