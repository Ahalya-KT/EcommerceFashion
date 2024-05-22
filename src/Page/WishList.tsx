import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { deleteWishListItem } from "../Redux/Slice/wishListSlice";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "../Redux/Slice/cartSlice";

function WishList() {
  const TABLE_HEAD = ["Product Name", "Status", "Action"];
  const TABLE_ROWS = [
    {
      product: "Shirt",
      price: "408",
      icon: <MdDelete className="cursor-pointer" />,
    },
    {
      product: "Bag set",
      price: "2300",
      status: "Not Available",
      icon: <MdDelete />,
    },
  ];
  const dispatch = useDispatch();
  const { wistList } = useSelector((state: RootState) => state.WishList);
  console.log(wistList, "wishlist");

  return (
    <div className="py-36 px-7">
      <div className="flex text-center justify-center font-semibold text-xl mb-8">
        <p>MY WISHLIST❤️</p>
      </div>
      <div>
        <table className="w-2/3 text-left mx-auto ">
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
            {wistList &&
              wistList.map((item, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-7" : "p-4";

                return (
                  <tr key={item.title}>
                    <div className="flex">
                      <td className={classes}>
                        <img src={item.img} className="w-10" />
                      </td>
                      <td className={classes}>{item.title}</td>
                    </div>

                    {/* <td className={classes}>{item.price}</td> */}
                    <td className={classes}>{item.status}</td>

                    <td className="flex gap-5 pb-5">
                      <button
                        onClick={() => dispatch(deleteWishListItem(index))}
                      >
                        <MdDelete className="cursor-pointer" size={20} />
                      </button>

                      <button
                        onClick={() =>
                          dispatch(addToCart({ ...item, quantity: 1 }))
                        }
                      >
                        <FaShoppingCart className="cursor-pointer" size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WishList;
