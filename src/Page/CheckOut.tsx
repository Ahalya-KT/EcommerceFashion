import { Radio } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { PlaceOrder } from "../Redux/Slice/orderSlice";
import { RootState } from "../Redux/store";
import { useState } from "react";
import { Country, State, City, IState, ICity } from "country-state-city";
import SearchInput from "./SearchInput";

function CheckOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const DeliverySchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    mobile: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required(" email is Required"),
    address: Yup.string()
      .min(10, "Address must be at least 10 characters")
      .required("Address is required"),
    zip: Yup.string().required("Zip is required"),
  });

  const { cart } = useSelector((state: RootState) => state.cart);
  const cartTotal = () => {
    let grandTotal = 0;
    cart.map((item) => {
      let total = item.quantity * item.price;
      grandTotal += total;
    });
    return grandTotal;
  };
  const countries = Country.getAllCountries();
  let [states, setStates] = useState<IState[]>();
  let [cities, setCities] = useState<ICity[]>();

  const calculateDeliveryDate = () => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    let formattedDate = currentDate.toDateString();
    return formattedDate;
  };

  const handleCountrySelect = (country: any) => {
    const states = State.getStatesOfCountry(country.isoCode);
    setStates(states);
  };

  const handleSelectState = (state: any) => {
    const cities = City.getCitiesOfState(state.countryCode, state.isoCode);
    setCities(cities);
  };

  return (
    <div className="py-36 px-20 bg-">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <p className="font-bold">Delivery Information</p>
          {/* set1 */}

          <Formik
            initialValues={{
              name: "",
              mobile: "",
              email: "",
              state: "",
              city: "",
              country: "",
              address: "",
            }}
            validationSchema={DeliverySchema}
            onSubmit={(values) => {
              dispatch(
                PlaceOrder({
                  ...values,
                  product: cart,
                  deliveryDate: calculateDeliveryDate(),
                  status: "pending",
                })
              );
              navigate("/orderConfrim");
              console.log(values, "placeOrder");
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="flex gap-9">
                  <div className="bg-blue-gray-50 p-5 my-6 rounded-lg">
                    <div className="flex gap-7">
                      <div>
                        <div className="mt-2">
                          <label className="text-xs">Name</label>
                        </div>
                        <div>
                          <Field
                            name="name"
                            type="text"
                            className=" mt-3 p-2 w-72"
                          />
                          <ErrorMessage
                            name="name"
                            className="text-red-500 text-sm"
                            component="p"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mt-2">
                          <label className="text-xs">Mobile Number</label>
                        </div>
                        <div>
                          <Field
                            name="mobile"
                            type="text"
                            className=" mt-3 p-2 w-72"
                          />
                          <ErrorMessage
                            name="mobile"
                            className="text-red-500 text-sm"
                            component="p"
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
                          <Field
                            name="email"
                            type="text"
                            className=" mt-3 p-2 w-72"
                          />

                          <ErrorMessage
                            name="email"
                            className="text-red-500 text-sm"
                            component="p"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mt-2"></div>
                        <div>
                          {/* country */}
                          <SearchInput
                            onInput={setFieldValue}
                            // onInput={handleInput}
                            onSelect={handleCountrySelect}
                            data={countries}
                            title={"Country"}
                            placeholder={"Select your country"}
                            name={"country"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* set3 */}

                    <div className="flex gap-7">
                      <div>
                        <div className="mt-2">
                          <SearchInput
                            onInput={setFieldValue}
                            onSelect={handleSelectState}
                            // data={states}
                            data={states || []}
                            title={"State/Region"}
                            placeholder={"Select your state"}
                            name={"regionState"}
                          />
                        </div>
                        <div></div>
                      </div>

                      <div className="">
                        <div className="">
                          <label className="text-xs">ZIP</label>
                        </div>
                        <div>
                          <Field
                            name="zip"
                            type="text"
                            className=" mt-2 p-2 w-32"
                          />
                          <ErrorMessage
                            name="zip"
                            className="text-red-500 text-sm"
                            component="p"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mt-2"></div>
                        <div>
                          {/* city */}
                          <SearchInput
                            onInput={setFieldValue}
                            onSelect={() => {}}
                            data={cities || []}
                            title={"City"}
                            placeholder={"Select your City"}
                            name={"city"}
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
                          <Field
                            as="textarea"
                            name="address"
                            className=" mt-3 p-2 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <p className="font-bold text-nowrap">Order Summary</p>
                    {/* order summary */}
                    {cart.map((item) => (
                      <div className="bg-blue-gray-50 my-6 flex flex-col gap-6 p-5  rounded-lg w-full lg:w-96">
                        <img src="" />
                        <p className="text-x1 font-bold">{item.title}</p>

                        <div className=" font-medium">
                          <p>
                            SubTotal:{" "}
                            <span className="ml-2">{cartTotal()}</span>
                          </p>
                          <p>
                            Total: <span className="ml-2">{cartTotal()}</span>
                          </p>
                          <p>
                            Discount:
                            {/* <span className="ml-2">{items.Discount}</span> */}
                          </p>
                        </div>
                        <p className="font-bold text-xl">Total</p>
                        <div>
                          <button className="bg-green-600 p-2 text-white  w-full font-bold">
                            PLACE ORDER
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Form>
            )}
          </Formik>

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
    </div>
  );
}

export default CheckOut;
