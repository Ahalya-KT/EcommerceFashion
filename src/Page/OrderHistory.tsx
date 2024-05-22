import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../Redux/store";

function OrderHistory() {
  const TABLE_HEAD = ["Product Name", "Price", "Status", "date", "Action"];
  const TABLE_ROWS = [
    {
      product: "Shirt",
      price: "408",
      status: "pending",
      date: "2 apr 2023",
    },
    {
      product: "Bag set",
      price: "2300",
      status: "pending",
      date: "2 apr 2023",
    },
  ];

  const { order } = useSelector((state: RootState) => state.order);
  console.log(order, "ordereditems");

  return (
    <div className="py-32 px-16">
      <p className="font-bold text-xl border-b py-3">ORDER HISTORY</p>

      <table className="w-2/3 text-left mx-auto my-8">
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
          {order.map((items, index) => {
            return items.product.map((product) => (
              <tr key={product.title}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  {/* <p className="bg-light-green-400 text-center w-14 rounded-lg text-xs p-1 text-white ">
                    {status}
                  </p> */}
                </td>
                <td>date</td>
                <td>
                  <Link to={"/orderDetails"}>
                    <p className="cursor-pointer">View Details</p>
                  </Link>
                </td>
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;
