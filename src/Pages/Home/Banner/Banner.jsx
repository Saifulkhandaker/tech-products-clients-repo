import { Link } from "react-router-dom";
import banner1 from "../../../assets/images/banner/banner.jpg";

const Banner = () => {
  return (
    <div>
      
  <div className="relative">
    <img className="md:h-[85vh] w-full" src={banner1} alt="" />
    <div className="absolute top-1/2 left-[20%] md:left-[20%] transform -translate-x-1/2 -translate-y-1/2 text-left space-y-1 md:space-y-2 lg:space-y-4">
      <p className="text-[#1E1E1F] md:font-medium text-[9px] md:text-sm">___SMART PRODUCTS</p>
      <h1 className="text-[19px] md:text-3xl lg:text-6xl text-[#1E1E1F]">Nikon Point <br /> & Shoot Cameras</h1>
      <p className="text-[#1E1E1F] text-[9px] md:text-sm md:font-medium">Most Versatile Smart Products</p>
     <Link to="/products">
     <button className="md:my-4 my-2 bg-none text-black border border-black rounded-none py-1 px-1 text-sm md:text-lg md:py-2 md:px-5 md:font-medium">Products</button>
     </Link>
    </div>
  </div>


    </div>
  );
};

export default Banner;
