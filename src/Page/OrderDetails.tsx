import { FaRegWindowMaximize } from "react-icons/fa";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { Radio } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";

function OrderDetails() {
  const TABLE_HEAD = ["Items", "quantity", "price"];
  const TABLE_ROWS = [
    {
      items: "Shirt",
      price: "408",
      quantity: "1",
      rate: "408",
    },
    {
      items: "Shirt",
      price: "408",
      quantity: "1",
      rate: "408",
    },
  ];
  // taking data from the checkout
  const location = useLocation();
  const { cart } = useSelector((state: RootState) => state.cart);
  const order = location.state ? location.state.order : null;
  console.log(order, "itemmmmmmssssssssssssssssss");
  console.log(cart, "cartItems");

  const TotalCart = () => {
    let grandTotal = 0;
    cart.map((item) => {
      let total = item.quantity * item.price;
      grandTotal += total;
    });
    return grandTotal;
  };

  return (
    <div className="py-40 px-16">
      <div className="flex justify-between my-7 mx-[7rem] relative">
        <div className="absolute w-[1120px] bg-light-blue-200 h-[6px] bg-opacity-30 top-5 mx-3"></div>
        <div>
          <Radio
            name="type"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
            className="border-light-blue-900 border-solid"
          />
          <FaRegWindowMaximize size={30} color="blue" />
          <p>Order Placed</p>
        </div>

        <div>
          <Radio
            name="type"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <GiBoxUnpacking size={30} color="blue" />
          <p>Packing</p>
        </div>

        <div>
          <Radio
            name="type"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <FaShippingFast size={30} color="blue" />
          <p>Shipping</p>
        </div>

        <div>
          <Radio
            name="type"
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            crossOrigin={undefined}
          />
          <AiOutlineDeliveredProcedure size={30} color="blue" />
          <p>Delivered</p>
        </div>
      </div>

      <div className="bg-blue-gray-100 p-5 rounded-xl flex justify-between">
        <div className="">
          {" "}
          <p className="text-xl font-bold">ORDER DETAILS</p>
          <p className="text-sm text-blue-gray-600">
            {" "}
            Order places in July 27,2024 at 9:43AM
          </p>
        </div>

        <div>
          <p className="font-bold text-black text-2xl">&{TotalCart()}</p>
        </div>
      </div>

      {/* details */}

      {/* table */}
      <table className="text-left w-full my-5">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {order?.product?.map((products: any, index: number) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 ";

            return (
              <tr key={products} className="text-gray-600">
                <td className={classes}>{products?.title}</td>
                <td className={classes}>{products?.quantity}</td>
                <td className={classes}>{products?.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* address */}

      <div className="py-9 flex w-full px-32">
        <div className="w-1/4">
          <p className="text-xl font-bold py-5">Billing Address</p>
          <p className="text-gray-700">{order.address}</p>
          <p className="text-gray-700">{order.city}</p>
          <p className="text-gray-700">{order.state}</p>
          <p className="text-gray-700">{order.zip}</p>
        </div>

        <div className="w-1/4">
          <p className="text-xl font-bold py-5">Shipping Address</p>
          <p className="text-gray-700">{order.address}</p>
          <p className="text-gray-700">{order.city}</p>
          <p className="text-gray-700">{order.state}</p>
          <p className="text-gray-700">{order.zip}</p>
        </div>

        <div className="w-1/4">
          <p className="text-xl font-bold py-5">Notes</p>
          <p className="text-gray-700">hello type something</p>
        </div>

        <div className="w-1/4">
          <p className="text-xl font-bold py-5">Notes</p>
          <p className="text-gray-700">hello type something</p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
