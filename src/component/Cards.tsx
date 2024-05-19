import { useNavigate } from "react-router-dom";
import Data from "../Page/Db";

const Cards = () => {
  const ViewProductDetails = (item: {
    img: string;
    title: string;
    price: string;
  }) => {
    navigate("/ProductDetails", { state: { item } });
  };

  const navigate = useNavigate();

  return (
    <div className="flex gap-10 flex-wrap py-16  justify-center text-center ">
      {Data.map((item) => (
        <div
          className="px-7 cursor-pointer"
          onClick={() => ViewProductDetails(item)}
        >
          <img src={item.img} className="" />
          <p className="font-semibold">{item.title}</p>
          <p className="text-blue-900">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
