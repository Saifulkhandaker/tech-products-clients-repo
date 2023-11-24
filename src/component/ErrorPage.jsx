import { Link } from 'react-router-dom';
import errorjpg from '../assets/images/banner/error.jpg';

const ErrorPage = () => {
    return (
        <div className="mt-5">
      <div className="text-center mb-20">
        <img className=" lg:ml-44" src={errorjpg} alt="" />
        <Link to="/">
          <button className="md:my-2 my-2 bg-none text-black border border-black rounded-none py-2 px-4 text-sm md:text-lg md:py-2 md:px-7 md:font-medium">Go Home</button>
          </Link>
      </div>
    </div>
    );
};

export default ErrorPage;