import { GiLargeDress } from "react-icons/gi";
// import { FaRegUser } from "react-icons/fa6";
// import { MdOutlineShoppingBag } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";


const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "CONTACT US", link: "/" },
  ];
  const[isOpen,setOpen]=useState(false)

  return (
    <div className=" w-full bg-white">
      <div className="md:px-10 py-6 px-7 md:flex fixed top-0 left-0 w-full ">
        <div className="flex text-2xl cursor-pointer items-center gap-1">
          <GiLargeDress className="w-7 h-7 text-pink-200" />
          <span className="font-bold">NorthStar</span>
        </div>
        {/* menu icon */}
        <div onClick={()=>setOpen(!isOpen)} className="absolute right-8 top-6 md:hidden">
          {
          isOpen ?  <IoIosMenu /> :   <RxCross2 /> 
        }
        </div>
       

        {/* nav link */}
        <div className="flex ">
       
            <ul className={`md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 absolute w-full transition-all duration-500 ease-in ${isOpen ? 'top-8' : 'top-[-490]'}`}>
              {Links.map((link) => (
                <li className="my-7 md:my-0 md:ml-12 ml-3 text-sm font-semibold  ">
                  <a href="/">{link.name}</a>
                </li>
              ))}
            </ul>

            {/* <div className="flex gap-3 md:static">
            <FaRegUser />
            <MdOutlineShoppingBag />
            <IoIosMenu />
          </div> */}
          
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
