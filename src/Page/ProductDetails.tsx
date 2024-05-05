import { useState } from "react";
import addCart from "../images/Addcart.png";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";
import { RiStarSLine } from "react-icons/ri";

function ProductDetails() {
  const ReviewDetails = [
    {
      img: "",
      name: "john",
      title: "its a nice product",
      date: "5 months ago",
      decription:
        "this product is very usefull. good quality product lorem thanku for u support ",
    },

    {
      img: "",
      name: "john",
      title: "its a nice product",
      date: "5 months ago",
      decription:
        "this product is very usefull. good quality product lorem thanku for u support ",
    },
  ];

  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);
  const [ReviewsVisible, setReviewsVisible] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionVisible(true);
    setReviewsVisible(false);
  };

  const toogleReviews = () => {
    setIsDescriptionVisible(false);
    setReviewsVisible(true);
  };
  return (
    <div className="py-32  flex flex-col">
      <div className="flex gap-16">
        <div>
          <div className="px-10 py-10 ">
            <img src={addCart} className="w-96" />
          </div>
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
            collection of shirt. This plain white shirt is made up of pure
            cotton and has a premium finish.
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
            <Link to={"/Cart"}> ADD TO CART</Link>
          </button>
        </div>
      </div>
      {/* review and decryption start */}
      <div>
        <div className="px-10 py-10">
          <div className="flex">
            <div>
              <button
                className="border p-2  hover:bg-blue-gray-50"
                onClick={toggleDescription}
              >
                Description
              </button>
            </div>
            <div>
              <button
                className="border p-2 w-24 hover:bg-blue-gray-50"
                onClick={toogleReviews}
              >
                Reviews
              </button>
            </div>
          </div>
          {/* description */}
          {isDescriptionVisible && (
            <div className="border p-5">
              <p className="">
                A key objective is engaging digital marketing customers and
                allowing them to interact with the brand through servicing and
                delivery of digital media. Information is easy to access at a
                fast rate through the use of digital communications.{" "}
              </p>

              <p>
                {" "}
                Users with access to the Internet can use many digital mediums,
                such as Facebook, YouTube, Forums, and Email etc. Through
                Digital communications it creates a Multi-communication channel
                where information can be quickly exchanged around the world by
                anyone without any regard to whom they are.[28] Social
                segregation plays no part through social mediums due to lack of
                face to face communication and information being wide spread
                instead to a selective audience.
              </p>
            </div>
          )}

          {/* reviews */}
          {ReviewsVisible && (
            <div>
              <p className="font-bold text-xl py-5">REVIEWS</p>

              <div className="flex gap-[9rem]">
                <div>
                  <p>Average Rating</p>
                  <h4 className="text-xl">4.0</h4>
                  <div className="flex gap-2 text-yellow-600">
                    <RiStarSFill size={25} />
                    <RiStarSFill size={25} />
                    <RiStarSFill size={25} />
                    <RiStarSLine size={25} />
                    <RiStarSLine size={25} />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="w-[300px] h-[5px] bg-blue-gray-100 rounded-lg">
                    <div className="w-[70px] h-[5px]    bg-amber-600"></div>
                  </div>

                  <div className="w-[300px] h-[5px] bg-blue-gray-100 rounded-lg">
                    <div className="w-[100px] h-[5px]    bg-amber-600"></div>
                  </div>

                  <div className="w-[300px] h-[5px] bg-blue-gray-100 rounded-lg">
                    <div className="w-[150px] h-[5px]    bg-amber-600"></div>
                  </div>
                  <div className="w-[300px] h-[5px] bg-blue-gray-100 rounded-lg">
                    <div className="w-[260px] h-[5px]    bg-amber-600"></div>
                  </div>
                  <div className="w-[300px] h-[5px] bg-blue-gray-100 rounded-lg">
                    <div className="w-[40px] h-[5px]    bg-amber-600"></div>
                  </div>
                </div>
              </div>
              {ReviewDetails.map((data) => (
                <div className="py-16">
                  <p className="font-bold text-xl">Customer FeedBack</p>

                  <div>
                    <div className="flex gap-3 py-4">
                      <img src="/" />
                      <p>{data.name}</p>
                      <p className="text-sm">{data.date}</p>
                    </div>
                    <div className="flex gap-2 text-yellow-600">
                      <RiStarSFill size={25} />
                      <RiStarSFill size={25} />
                      <RiStarSFill size={25} />
                      <RiStarSLine size={25} />
                      <RiStarSLine size={25} />
                    </div>

                    <div className="py-4">
                      <p className="font-bold text-xl">{data.title}</p>
                      <p className="py-5">{data.decription}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* review and description end */}
      </div>
    </div>
  );
}

export default ProductDetails;
