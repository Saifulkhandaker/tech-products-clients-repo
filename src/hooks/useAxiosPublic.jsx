import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://tech-products-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
