import Navbar from "../component/Navbar";
import img1 from "../images/img_1.png";

const Home = () => {
  return (
    <div>
      <div className="bg-white">
        <Navbar />
      </div>

      <div className="py-16  md:absolute w-full ">
        <img src={img1} className="w-full object-cover overflow-hidden" />
        <div className="relative md:bottom-96 text-right md:right-36 md:text-5xl  leading-snug bottom-32 right-11 ">
          <p className="text-white uppercase font-bold">stylist picks beat</p>
          <p className="text-white uppercase font-bold">the heat</p>

          <button className="text-sm text-white border-4 md:p-2">SHOP NOW</button>
        </div>

       
      </div>
    </div>
  );
};

export default Home;
