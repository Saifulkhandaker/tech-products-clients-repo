import { Link, useLoaderData } from "react-router-dom";
import productBg from "../assets/images/banner/banner2.jpg";
import { useState } from "react";
import { MdOutlineReport, MdWhereToVote } from "react-icons/md";
import Reviews from "./Reviews";

const ProductDetails = () => {
  const product = useLoaderData();
  const { name, img, tags, details } = product;

  const [totalVotes, setTotalVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const [totalReports, setTotalReports] = useState(0);
  const [hasReported, setHasReported] = useState(false);

  // handle vote
  const handleVote = () => {
    if (!hasVoted) {
      setTotalVotes(totalVotes + 1);
      setHasVoted(true);
    } else {
      console.log("You've already voted for this product.");
    }
  };
  // handle report
  const handleReport = () => {
    if (!hasReported) {
      setTotalReports(totalReports + 1);
      setHasReported(true);
    } else {
      console.log("You've already reported  this product.");
    }
  };

  return (
    <div>
      {/* banner section */}
      <div className="relative">
        <img className="md:h-[50vh] w-full " src={productBg} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl  text-white">
          P R O D U C T __ D E T A I L S<br />
          <Link to="/products">
            <p className="text-sm text-center mt-3 md:mt-6 font-normal underline">
              All Products
            </p>
          </Link>
        </h1>
      </div>
      <div className="hero min-h-screen bg-base-200 md:w-11/12 mx-auto my-10 border ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <p className="mt-2"># {tags}</p>
            <p className="py-6">{details}</p>
            <div className="flex justify-self-end gap-10">
              <div className="flex items-center gap-5">
                <button
                  className="btn bg-white border-green-600 rounded-lg"
                  onClick={handleVote}
                  disabled={hasVoted}
                >
                  Up Vote
                </button>
                <p className="text-2xl flex items-center gap-2 text-green-900 font-medium">
                  <MdWhereToVote className="mt-1" />
                  {totalVotes}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <button
                  className="btn bg-white border-red-800 rounded-lg"
                  onClick={handleReport}
                  disabled={hasReported}
                >
                  Report
                </button>
                <p className="text-2xl flex items-center gap-2 text-red-900 font-medium">
                  <MdOutlineReport className="mt-1" />
                  {totalReports}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* review section */}
      <div className="w-11/12 mx-auto my-10 text-center">
        <h1 className="text-3xl font-medium">__USERS REVIEW__</h1>
        <p>About This Product</p>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default ProductDetails;
