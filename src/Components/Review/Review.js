import React from "react";

function Review(props) {
  // Destructuring data from props
  const { name, rating, review } = props.review;

  return (
    <div className="flex justify-center mb-10">
      <div className="rounded-lg w-6/12 bg-slate-100 my-2 p-5">
        <p className="rounded-lg block bg-white p-5 mb-3">{review}</p>
        <p className="text-right block font-semibold text-orange-500">{rating} stars</p>
        <p className="block font-semibold">{name}</p>
      </div>
    </div>
  );
}

export default Review;
