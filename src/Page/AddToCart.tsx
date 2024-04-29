import addCart from "../images/Addcart.png";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function AddToCart() {
  return (
    <div className="py-32 flex gap-16">
      <div className="px-10 py-10 ">
        <img src={addCart} className="w-96" />
      </div>

      <div className=" py-10 ">
        <div className="flex justify-between">
          <p className="text-xs text-blue-gray-300">
            HOME/SHOP/WOMEN/
            <span className="text-black font-semibold">SHOP</span>
          </p>

          <div className="flex gap-1">
            {/* <CiHeart size={25} className="cursor-pointer" /> */}
            <Link to="/Wishlist">
              <CiHeart size={25} className="cursor-pointer" />
            </Link>
            <CiShoppingCart size={25} className="cursor-pointer" />
          </div>
        </div>

        <p className="text-2xl py-3 font-semibold">plain White Shirt</p>
        <p className="py-2 text-2xl text-light-blue-900">$59.00</p>
        <p className="py-2 text-brown-300">
          A classic t-shirt never goes out of style. This is our most premium
          <br></br>
          collection of shirt. This plain white shirt is made up of pure cotton
          and has a premium finish.
        </p>

        <select className="border border-black-500 p-2 mt-6">
          <option value="">Select Size</option>
          <option value="option1">sm</option>
          <option value="option2">lg</option>
          <option value="option3">xl</option>
          <option value="option3">xxl</option>
        </select>

        <div className="py-10 text-black">
          <p>Category:Women,polo,Casual</p>
          <p>Tags:Modern,Design,cotton</p>
        </div>

        <button className="bg-blue-900 p-3 text-white font-semibold text-xs">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
