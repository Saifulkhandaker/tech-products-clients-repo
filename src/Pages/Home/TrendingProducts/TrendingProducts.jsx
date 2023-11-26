import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import FeaturedItem from "../../Shared/ProductItem/ProductItem";
import ProductItem from "../../Shared/ProductItem/ProductItem";

const TrendingProducts = () => {
  const [products] = useProducts();
  const featured = products.filter((item) => item.category === "trending");
  // console.log(featured.length);
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h1 className="text-3xl font-medium">TRENDING PRODUCTS</h1>
      <p className="text-sm md:text-xl mt-2 ">
        _______________Recent Trending products.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((item) => (
          <ProductItem key={item.id} item={item}></ProductItem>
        ))}
      </div>
      <Link to="/products">
      <button className="bg-none text-black border border-black rounded-none  text-lg py-2 px-5 font-medium flex justify-center items-center mx-auto mb-10">Show All Products</button>
      </Link>
    </div>
  );
};

export default TrendingProducts;
