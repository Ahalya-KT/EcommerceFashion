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
            {TABLE_ROWS.map(({ Product, price, Quantity, Total }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={Product}>
                  <td className={classes}></td>
                  <td className={classes}>{Product}</td>
                  <td className={classes}>{price}</td>
                  <td className={classes}>{Quantity}</td>
                  <td className={classes}>{Total}</td>
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
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default Cart;
