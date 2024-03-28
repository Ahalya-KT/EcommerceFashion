
import Navbar from '../component/Navbar';
import img1 from "../images/img_1.png";



const Home = () => {
  return (
    <div>
      <div className='bg-white'>
      <Navbar/>
      </div>
    
     <div className='py-16  md:absolute w-full'>
      <img src={img1} className='w-full object-cover overflow-hidden' />
      <p className='md:relative bottom-96 text-right right-36 text-5xl text-white uppercase font-bold'>stylist picks beat 
      the heat</p>
      <div>
       
      </div>
     </div>
    
    </div>
  )
}

export default Home