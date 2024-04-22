import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import pics from "../images/pic19.jpg";
import pics1 from "../images/pic21.png";
import pics2 from "../images/pic22.png";
import pics3 from "../images/pic31.png";
import pics4 from "../images/pic32.png";
import pics5 from "../images/pic33.png";
import pics6 from "../images/pic34.png";
import pics7 from "../images/pic41.png";
import pics8 from "../images/pic42.png";
import pics9 from "../images/pic43.png";

function About() {
  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar />
      </div>
      <div className="py-20 relative">
        <img src={pics} className="w-full" />
        <div className="absolute md:top-52   left-10 right-0">
          <p className="text-white text-4xl">ABOUT NORTH STAR</p>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex justify-center gap-16">
        <div className="relative">
          <img src={pics1} className="" />
          <div className="text-center  absolute flex justify-center bottom-6 left-0 right-0">
            <button className=" bg-white p-3 text-blue-900 rounded-lg">
              BUY NOW
            </button>
          </div>
        </div>

        <div className="relative">
          <img src={pics2} className="" />
          <div className="text-center  absolute flex justify-center bottom-6 left-0 right-0">
            <button className="bg-white p-3 text-blue-900 rounded-lg">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* founders */}
      <div className="">
        <h1 className="py-32 text-center text-xl font-semibold">
          {" "}
          The Founders
        </h1>
        <div className="flex gap-10 justify-center font-semibold">
          <div>
            <img src={pics3} />
            <p>HM JaWad</p>
          </div>

          <div>
            <img src={pics4} />
            <p>FurQan ABid</p>
          </div>
          <div>
            <img src={pics5} />
            <p>Abdullah Ah</p>
          </div>
          <div>
            <img src={pics6} />
            <p>ABrar Khan</p>
          </div>
        </div>
      </div>

      {/* testimonials */}

      <div>
        <h1 className="py-32 text-center text-xl font-semibold">
          {" "}
          Testimonials
        </h1>
        <div className="flex flex-col justify-center gap-20 items-center">
          <div className="flex gap-14 ">
            <div>
              <img src={pics7} />
            </div>
            <div className="text-brown-600">
              <p className="text-3xl">" "</p>
              <p className=" font-semibold text-xl">
                Once we ordered some accessories items and we got <br></br>the
                products delivered in our doorstep.
              </p>
              <p className="py-5">Stacy</p>
            </div>
          </div>

          <div className="flex gap-14 ">
            <div>
              <img src={pics8} />
            </div>
            <div className="text-brown-600">
              <p className="text-3xl">" "</p>
              <p className=" font-semibold text-xl">
                I ordered 5 shirts from them and received them in no <br></br>
                time. The customer support was awesome!
              </p>
              <p className="py-5">Tiffany</p>
            </div>
          </div>

          <div className="flex gap-14 ">
            <div>
              <img src={pics9} />
            </div>
            <div className="text-brown-600">
              <p className="text-3xl">" "</p>
              <p className=" font-semibold text-xl">
                I got a wrong shirt so I contacted them and they happily
                <br></br> offered me a refund. I will surely shop from them
                again.
              </p>
              <p className="py-5">James</p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="my-6">
        <Footer />
      </div>
    </div>
  );
}

export default About;
