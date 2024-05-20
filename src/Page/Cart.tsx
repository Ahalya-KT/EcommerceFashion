import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../Redux/store";
import { MdDelete } from "react-icons/md";

import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { deleteCartItem, updateQty } from "../Redux/Slice/cartSlice";

const TABLE_HEAD = ["", "Product", "Price", "Quantity", "Total"];

function Cart() {
  const { cart } = useSelector((state: RootState) => state.cart);
  console.log(cart, "cart");
  const dispatch = useDispatch();
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
              cart?.map(({ title, price, quantity, img }, index) => {
                const isLast = index === cart.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-2 border-b border-blue-gray-50";

                return (
                  <tr key={title}>
                    <td className={classes}></td>
                    <div className="flex">
                      <img src={img} alt="no-img" className="w-10 pt-2" />

                      <td className={classes}>{title}</td>
                    </div>

                    <td className={classes}>{price}</td>
                    <td className={classes}>
                      <div className="flex gap-3 border w-20 p-2 rounded-lg items-center">
                        <button
                          onClick={() =>
                            dispatch(updateQty({ type: "decr", index }))
                          }
                        >
                          <TiMinus size={10} />
                        </button>

                        {quantity}

                        <button
                          onClick={() =>
                            dispatch(updateQty({ type: "inc", index }))
                          }
                        >
                          <FaPlus size={10} />
                        </button>
                      </div>
                    </td>
                    <div className="flex gap-6">
                      <td className={classes}>{quantity * price}</td>
                      <td className={classes}>
                        <button onClick={() => dispatch(deleteCartItem(index))}>
                          <MdDelete />
                        </button>
                      </td>
                    </div>
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
