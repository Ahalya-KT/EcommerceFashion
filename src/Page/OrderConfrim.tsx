import { TiTick } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function OrderConfrim() {
  return (
    <div className="py-44 px-14 flex flex-col items-center justify-center text-center">
      <div className="bg-gray-100 w-96 flex flex-col justify-center text-center p-3">
        <div className="text-light-green-600 flex justify-center">
          <TiTick size={60} />
        </div>

        <p className="text-light-green-600 font-bold text-2xl">
          ORDER COMPLETED
        </p>
        <p className="text-xs">
          Thank you for your Order.You order has been Successfully placed{" "}
        </p>

        <div className="py-10">
          <p className="font-semibold text-xl">Order Details</p>
          <div className="py-6">
            <p>Order ID</p>
            <div className="flex items-center justify-center text-center gap-1 text-light-blue-800">
              <Link to={"/orderDetails"}>
                <p className="cursor-pointer">View Details</p>
              </Link>

              <FaArrowRightLong />
            </div>
          </div>

          <p className="font-semibold">Expected Delivery Date</p>
          <p>May5</p>

          <div className="bg-light-green-600 my-8 text-white p-2 font-semibold">
            <button>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfrim;
