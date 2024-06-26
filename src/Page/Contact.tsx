import Navbar from "../component/Navbar";
import picContact from "../images/contact.jpg";

function Contact() {
  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      {/* section1 */}
      <div className="py-20 relative">
        <img src={picContact} className="w-full" />
        <div className="absolute md:top-52   left-10 right-0">
          <p className="text-white text-4xl">CONTACT US</p>
        </div>
      </div>

      {/* form */}
      <div className="flex gap-40 ">
        <div className="px-9 m-10">
          <p className="font-semibold text-3xl">
            We would love to hear from you.
          </p>
          <p className="text-sm py-4">
            If you have any query or any type of suggestion, you can contact us
            here. We would love to hear from you.
          </p>

          <form>
            <div className="flex gap-8">
              <div className="flex flex-row">
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

                  <div></div>
                </div>
              </div>

              <div className="flex flex-col">
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
            </div>

            <div className="mt-6">
              <label className="text-xs">message</label>
            </div>
            <div>
              <textarea
                name=""
                id=""
                className="border-2 border-gray-300 mt-3 w-full p-7"
              />
            </div>
          </form>
        </div>

        {/* section1.2 */}

        <div className=" flex flex-col gap-9">
          <div>
            <p className="font-semibold text-2xl">Visit Us</p>
            <div className="py-3">
              {" "}
              <p>UET Lahore, Punjab, Pakistan</p>
              <p>Phone: +923039898987</p>
            </div>
          </div>

          <div>
            <p className="font-semibold text-2xl">Get In Touch</p>
            <div className="py-6">
              <p>You can get in touch with us on this provided email. </p>
              <p>Email: hmjawad087@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
