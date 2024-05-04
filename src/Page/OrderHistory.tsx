import { Link } from "react-router-dom";

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
          {TABLE_ROWS.map(({ product, price, status, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={product}>
                <td className={classes}>{product}</td>
                <td className={classes}>{price}</td>
                <td className={classes}>
                  <p className="bg-light-green-400 text-center w-14 rounded-lg text-xs p-1 text-white ">
                    {status}
                  </p>
                </td>
                <td className={classes}>{date}</td>
                <td className={classes}>
                  <Link to={"/orderDetails"}>
                    <p className="cursor-pointer">View Details</p>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;
