import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function OrderHistory() {
  const TABLE_HEAD = ["Product Name", "Price", "Status", "date", "Action"];

  const navigate = useNavigate();
  // function to navigate to another page
  const ViewProduct = (order: any) => {
    navigate("/orderDetails", { state: { order } });
  };

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
          {order.map((items) => {
            return items.product.map((product) => (
              <tr key={product.title}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <p className="bg-light-green-400 text-center w-14 rounded-lg text-xs p-1 text-white ">
                    {items.status}
                  </p>
                </td>
                <td> {items.deliveryDate}</td>
                <td>
                  <div className="flex gap" onClick={() => ViewProduct(items)}>
                    <p className="cursor-pointer text-light-blue-900">
                      View Details
                    </p>
                    <FaArrowRightLong className="mt-1" />
                  </div>
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
