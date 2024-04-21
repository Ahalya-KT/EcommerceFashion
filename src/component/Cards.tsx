import Data from "../Page/Db"
import img6 from "../images/pic11.jpg";

const Cards = () => {
  return (
    <div className="flex gap-10 flex-wrap py-16  justify-center text-center">
          {Data.map((item)=>(
      <div className="px-7">
      <img src={img6} className="w-72 h-60"/>
      <p className="font-semibold">{item.title}</p>
      <p className="text-blue-900">{item.price}</p>
  </div>
    ))}
      </div>
    
   
  )
}

export default Cards