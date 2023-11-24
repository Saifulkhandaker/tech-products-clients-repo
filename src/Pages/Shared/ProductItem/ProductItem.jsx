import { useState } from "react";
import { MdWhereToVote } from "react-icons/md";


const ProductItem = ({item}) => {
    const {name, img, tags} = item;
    const [totalVotes, setTotalVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      setTotalVotes(totalVotes + 1);
      setHasVoted(true);
    } else {
      console.log("You've already voted for this product.");
    }
  };

    return (
        <div className="card bg-[#F2F2F4]  border-2 rounded-none my-10">
      <figure className="">
        <img
          src={img}
          alt="Shoes"
          className="w-full "
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h2 ># <span className="font-medium underline">{tags}</span></h2>
        <div className="flex items-center gap-10">
        <button className="btn bg-none rounded-lg" onClick={handleVote} disabled={hasVoted}>Up Vote</button>
        <p className="text-2xl flex items-center gap-2 text-green-900 font-medium"><MdWhereToVote className="mt-1" />{totalVotes}</p>
        </div>
      </div>
    </div>
    );
};

export default ProductItem;