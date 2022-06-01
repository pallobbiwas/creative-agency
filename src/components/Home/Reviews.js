import React, { useEffect, useState } from "react";
import ClintFeddback from "./ClintFeddback";

const Reviews = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center my-10">
        Clients <span className="text-green-500">Feedback</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-20 gap-4">
        {review?.map((r) => (
          <ClintFeddback key={r._id} reviw={r}></ClintFeddback>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
