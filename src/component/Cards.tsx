import Data from "../Page/Db";

const Cards = () => {
  return (
    <div className="flex gap-10 flex-wrap py-16  justify-center text-center">
      {Data.map((item) => (
        <div className="px-7">
          <img src={item.img} className="" />
          <p className="font-semibold">{item.title}</p>
          <p className="text-blue-900">{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
