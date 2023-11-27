import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  // const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/product/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setLoading(false)
  //     });
  // },[]);
  // return [products, loading]

  const axiosPublic = useAxiosPublic(); 

  const {data: product = [], isPending: loading, refetch} = useQuery({
    queryKey: ['product'],
    queryFn: async() => {
      const res = await axiosPublic.get('/product'); // --------------> trasnstackQuery
      return res.data;
    }
  })

  return [product, loading, refetch]
}
export default useProducts;