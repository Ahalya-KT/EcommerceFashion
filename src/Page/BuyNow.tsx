import { Link } from "react-router-dom";

const BuyNow = () => {
  return (
    <div className="px-11 py-20 flex gap-4">
      <div className="bg-black w-3/5 text-white p-24 leading-10 text-center">
        <p className="uppercase font-semibold text-2xl">peace of mind</p>
        <p className="pt-7">
          A one-stop platform for all your fashion needs, hassle-free. Buy with
          a peace of mind.
        </p>
        <Link to={"/ProductDetails"}>
          <button className="bg-white  text-black  font-bold py-2 mt-7 px-4 ">
            Shop Now
          </button>
        </Link>
      </div>

      <div className="bg-black w-2/5 text-white p-24 text-center">
        <p className="uppercase font-semibold text-2xl">Buy 2 Get 1 Free</p>
        <p className="leading-tight pt-7 ">
          End of season sale. Buy any 2 items of your choice and get 1 free.
        </p>
        <Link to={"/ProductDetails"}>
          <button className="bg-white  text-black  font-bold py-2 mt-7 px-4 ">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BuyNow;
