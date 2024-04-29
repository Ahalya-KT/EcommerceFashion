import { MdDelete } from "react-icons/md";

function WishList() {
  const TABLE_HEAD = ["Product Name", "Price", "Status", "Action"];
  const TABLE_ROWS = [
    {
      product: "Shirt",
      price: "408",
      status: "Available",
      icon: <MdDelete className="cursor-pointer" />,
    },
    {
      product: "Bag set",
      price: "2300",
      status: "Not Available",
      icon: <MdDelete />,
    },
  ];

  return (
    <div className="py-36 px-7">
      <div className="flex text-center justify-center font-semibold text-xl mb-8">
        <p>MY WISHLIST❤️</p>
      </div>
      <table className="w-2/3 text-left mx-auto">
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
          {TABLE_ROWS.map(({ product, price, status, icon }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={product}>
                <td className={classes}>{product}</td>
                <td className={classes}>{price}</td>
                <td className={classes}>{status}</td>
                <td className={classes}>{icon}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WishList;
