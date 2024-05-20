import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { deleteWishListItem } from "../Redux/Slice/wishListSlice";
import { FaShoppingCart } from "react-icons/fa";

function WishList() {
  const TABLE_HEAD = ["Product Name", "Price", "Status", "Action"];
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
              wistList.map(({ title, price, status, img }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={title}>
                    <div className="flex">
                      <td className={classes}>
                        <img src={img} className="w-10" />
                      </td>
                      <td className={classes}>{title}</td>
                    </div>

                    <td className={classes}>{price}</td>
                    <td className={classes}>{status}</td>
                    <div className="flex gap-4">
                      <td className={classes}>
                        <button
                          onClick={() => dispatch(deleteWishListItem(index))}
                        >
                          <MdDelete className="cursor-pointer" />
                        </button>

                        <button>
                          <FaShoppingCart />
                        </button>
                      </td>
                    </div>
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
