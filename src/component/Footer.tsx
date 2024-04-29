import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="">
      <div className="flex w-full  justify-center py-12  bg-blue-gray-50 ">
        <div className="w-72">
          <p className="text-xs font-semibold">COMPANY INFO</p>
          <div className="py-8 text-sm">
            <p>About Us</p>
            <p>Latest Posts</p>
            <p>Contact Us</p>
            <p>Shop</p>
          </div>
        </div>
        <div className="w-72">
          <p className="text-xs  font-semibold">HELP LINKS</p>
          <div className="py-8 text-sm">
            <p>Tracking</p>
            <p>Order Status</p>
            <p>Delivery</p>
            <p>Shipping Info</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="w-72">
          <p className="text-xs  font-semibold">USEFUL LINKS</p>
          <div className="py-8 text-sm">
            <p>Special Offers</p>
            <p>Gift Cards</p>
            <p>Advertising</p>
            <p>Terms of Use</p>
          </div>
        </div>
        <div className="w-72">
          <p className="text-xs  font-semibold">GET IN THE KNOW</p>
          <input
            type="text"
            placeholder="Enter Email"
            className=" border-b border-gray-800 my-8 bg-blue-gray-50 text-sm w-72 p-4"
          />
        </div>
      </div>

      {/* last section */}
      <div className="flex justify-between bg-blue-gray-50 px-28 text-xs py-8">
        <div>
          <p>© 2020 NorthStar eCommerce</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
        <div className="flex gap-4">
          <FaInstagramSquare size={15} />
          <FaWhatsappSquare size={15} />
          <FaSquareXTwitter size={15} />
          <FaFacebookSquare size={15} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
