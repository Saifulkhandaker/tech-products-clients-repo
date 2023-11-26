import { useContext, useState } from "react";
import { MdWhereToVote } from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const ProductItem = ({ item }) => {
  const { name, img, tags, _id } = item;
  const [totalVotes, setTotalVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);
  const { user } = useContext(AuthContext);

  const handleVote = () => {
    if (user) {
      // If the user is logged in, allow them to vote
      if (!hasVoted) {
        setTotalVotes(totalVotes + 1);
        setHasVoted(true);
      } else {
        console.log("You've already voted for this product.");
      }
    } else {
      // If the user is not logged in
      console.log("Please log in to vote.");
    }
  };

  return (
    <div className="card bg-[#F2F2F4]  border-2 rounded-none my-10">
      <figure className="">
        <img src={img} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <Link to={`/productDetails/${_id}`}>
          <h2 className="card-title">{name}</h2>
        </Link>
        <h2>
          # <span className="font-medium underline">{tags}</span>
        </h2>
        <div className="flex items-center gap-10">
          {/* Use a Link to navigate to the login page if the user is not logged in */}
          {user ? (
            <button
              className="btn bg-white rounded-lg"
              onClick={handleVote}
              disabled={hasVoted}
            >
              Up Vote
            </button>
          ) : (
            <Link to="/login">
              <button className="btn bg-white rounded-lg">Log in to Vote</button>
            </Link>
          )}
          <p className="text-2xl flex items-center gap-2 text-green-900 font-medium">
            <MdWhereToVote className="mt-1" />
            {totalVotes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
