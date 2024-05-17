import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../Redux/store";

const TABLE_HEAD = ["", "Product", "Price", "Quantity", "Total"];

const TABLE_ROWS = [
  {
    Product: "Plain White Shirt",
    price: "2500",
    Quantity: "1",
    Total: "2500",
  },
  {
    Product: "Plain White Shirt",
    price: "2500",
    Quantity: "1",
    Total: "2500",
  },
];

function Cart() {
  const { cart } = useSelector((state: RootState) => state.cart);
  return (
    <div>
      <div className="py-52">
        <p className="px-14 text-xs text-gray-500 font-semibold mb-11">
          HOME/<span className="text-black font-semibold">SHOPPING CART</span>
        </p>

        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 p-4">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart?.map(({ product, price, quantity, total }, index) => {
                const isLast = index === cart.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={product}>
                    <td className={classes}></td>
                    <td className={classes}>{product}</td>
                    <td className={classes}>{price}</td>
                    <td className={classes}>{quantity}</td>
                    <td className={classes}>{total}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        <div>
          <p className="py-24 px-14 text-2xl font-semibold  pb-8">
            Cart Totals
          </p>
          <div className="w-96 px-14  flex flex-col gap-7">
            <div className="flex justify-between border-b border-blue-gray p-3">
              <p>Subtotal</p>
              <p>$59.00</p>
            </div>

            <div className="flex justify-between border-b border-blue-gray p-3">
              <p>Shipping Free</p>
              <p>FREE!!!</p>
            </div>

            <div className="flex justify-between">
              <p className="font-semibold">Total</p>
              <p>$59.00</p>
            </div>
          </div>
        </div>
        <button className=" text-xs bg-orange-800 text-white p-3 my-14 mx-10">
          <Link to="/checkout">PROCEED TO CHECKOUT</Link>
        </button>
      </div>
    </div>
  );
}

export default Cart;
