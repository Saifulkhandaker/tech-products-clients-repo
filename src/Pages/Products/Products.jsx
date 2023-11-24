import { Link } from 'react-router-dom';
import productBg from '../../assets/images/banner/banner2.jpg';
import useProducts from '../../hooks/useProducts';
import ProductItem from '../Shared/ProductItem/ProductItem';

const Products = () => {

    const [products] = useProducts();
    console.log(products);

    return (
        <div>
             {/* banner section */}
      <div className="relative">
        <img className="md:h-[70vh] w-full " src={productBg} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl  text-white">
        A L L __ P R O D U C T S<br />
          <Link to="/">
            <p className="text-sm text-center mt-3 md:mt-6 font-normal underline">
              Home
            </p>
          </Link>
        </h1>
      </div>
      <div className='items-center text-center my-5'>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-r-none border border-black" />
      <button className='btn rounded-l-none md:my-4 bg-none text-black border border-l-0 border-black  text-[17px] lg:text-lg '>Search</button>
      </div>
      <div className='w-11/12 mx-auto'>
        {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((item) => (
              <ProductItem key={item.id} item={item}></ProductItem>
            ))}
          </div>
        }
      </div>
    </div>
    );
};

export default Products;