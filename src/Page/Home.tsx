import Navbar from "../component/Navbar";
import img1 from "../images/img_1.png";
import Cards from "../component/Cards";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupport } from "react-icons/md";
import { TbBrandDaysCounter } from "react-icons/tb";
import { FaFingerprint } from "react-icons/fa";
import BuyNow from "./BuyNow";
// import Counter from "../component/Counter";

const Home = () => {
  return (
    <div>
      <div className="bg-white py-10">
        <Navbar />
      </div>

      <div className=" w-full">
        <img src={img1} className="w-full object-cover overflow-hidden" />
        <div className="relative md:bottom-96 text-right md:right-36 md:text-5xl  leading-snug bottom-32 right-11 ">
          <p className="text-white uppercase font-bold">stylist picks beat</p>
          <p className="text-white uppercase font-bold md:pr-36">the heat</p>
          <div className=" md:pr-44">
            <button className="text-sm text-white border-4 md:p-2 ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="font-bold text-3xl">Discover NEW Arrivals</p>
        <p className="">Recently added shirts!</p>
      </div>
      {/* card */}
      <Cards />

      {/* testing email */}
      {/* <div>
        <p>{user?.email}</p>
      </div> */}

      {/* section4 */}

      <div className="py-24 px-16 flex gap-32 text-center justify-center">
        <div className="flex gap-4">
          <div>
            <FaShippingFast size={20} color="blue" />
          </div>

          <div>
            <p className="font-bold">Free Shipping</p>
            <p className="w-52">Enjoy free shipping on all orders above $100</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <MdOutlineSupport size={20} color="blue" />
          </div>

          <div>
            <p className="font-bold">SUPPORT 24/7</p>
            <p className="w-52">
              Our support team is there to help you for queries
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <TbBrandDaysCounter size={20} color="blue" />
          </div>

          <div>
            <p className="font-bold">30 DAYS RETURN</p>
            <p className="w-52">
              Simply return it within 30 days for an exchange.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <FaFingerprint size={20} color="blue" />
          </div>
          <div>
            <p className="font-bold">100% PAYMENT SECURE</p>
            <p className="w-52">
              Our payments are secured with 256 bit encryption
            </p>
          </div>
        </div>
      </div>

      {/* section5 */}
      <BuyNow />

      {/* section6 */}
      <div className="text-center">
        <p className="font-bold text-2xl">Top Sellers</p>
        <p className="text-gray-600">Browse our top-selling products</p>
      </div>
      <Cards />

      {/* testing redux */}
      {/* <Counter /> */}
    </div>
  );
};

export default Home;
