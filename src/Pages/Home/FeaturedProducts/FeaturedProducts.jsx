import useProducts from "../../../hooks/useProducts";
import ProductItem from "../../Shared/ProductItem/ProductItem";

const FeaturedProducts = () => {
  const [products] = useProducts();
  const featured = products.filter((item) => item.category === "featured");
  console.log(featured.length);
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <h1 className="text-3xl font-medium">FEATURED PRODUCTS</h1>
      <p className="text-sm md:text-xl mt-2 ">
        _______________The collection of Featured products.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((item) => (
          <ProductItem key={item.id} item={item}></ProductItem>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
