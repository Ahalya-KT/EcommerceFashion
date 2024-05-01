import { Radio } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function CheckOut() {
  const checkoutList = [
    {
      img: "",
      productName: "Speaker",
      SubTotal: "$2334",
      Total: "$2334",
      Discount: "0%",
    },
  ];
  return (
    <div className="py-36 px-20 bg-">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <p className="font-bold">Delivery Information</p>
          {/* set1 */}

          <div className="bg-blue-gray-50 p-5 my-6 rounded-lg">
            <div className="flex gap-7">
              <div>
                <div className="mt-2">
                  <label className="text-xs">Name</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="border-solid border-2 border-gray-300 mt-3 p-2 w-72"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <label className="text-xs">Mobile Number</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="border-solid border-2 border-gray-300 mt-3 p-2 w-72"
                  />
                </div>
              </div>
            </div>

            {/* set2 */}
            <div className="flex gap-7">
              <div>
                <div className="mt-2">
                  <label className="text-xs">Email</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="border-solid border-2 border-gray-300 mt-3 p-2 w-72"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <label className="text-xs">City</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="border-solid border-2 border-gray-300 mt-3 p-2 w-72"
                  />
                </div>
              </div>
            </div>

            {/* set3 */}

            <div className="flex gap-7">
              <div>
                <div className="mt-2">
                  <label className="text-xs">State</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="border-solid border-2 border-gray-300 mt-3 p-2 w-72"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <label className="text-xs">ZIP</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="border-solid border-2 border-gray-300 mt-3 p-2 w-32"
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                  <label className="text-xs">State</label>
                </div>
                <div>
                  <input
                    type="text"
                    className="border-solid border-2 border-gray-300 mt-3 p-2 w-32"
                  />
                </div>
              </div>
            </div>

            {/* set4 */}
            <div>
              <div>
                <div className="mt-2">
                  <label className="text-xs">Address</label>
                </div>
                <div>
                  <textarea className="border-solid border-2 border-gray-300 mt-3 p-2 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 w-96">
          <p className="font-bold">Order Summary</p>

          {checkoutList.map((items) => (
            <div className="bg-blue-gray-50 my-6 flex flex-col gap-6 p-5  rounded-lg">
              <img src="" />
              <p className="text-x1 font-bold">{items.productName}</p>

              <div className=" font-medium">
                <p>
                  SubTotal: <span className="ml-2">{items.SubTotal}</span>
                </p>
                <p>
                  Total: <span className="ml-2">{items.Total}</span>
                </p>
                <p>
                  Discount:<span className="ml-2">{items.Discount}</span>
                </p>
              </div>
              <p className="font-bold text-xl">Total</p>
              <div>
                <button className="bg-green-600 p-2 text-white  w-full font-bold">
                  <Link to="/orderConfrim"> PLACE ORDER</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* payment mode */}
        <div>
          <p className="font-bold">Payment Mode</p>
          <div className="flex gap-10 bg-blue-gray-50 p-6 my-8 rounded-lg">
            <Radio
              name="type"
              label="Cash On Delivery"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Radio
              name="type"
              label="Razer Pay"
              defaultChecked
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />

            <Radio
              name="type"
              label="Online Payment"
              defaultChecked
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
