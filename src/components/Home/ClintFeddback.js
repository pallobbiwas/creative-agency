import React from "react";

const ClintFeddback = ({ reviw: { img, name, discription } }) => {
  return (
    <div className="container mx-auto my-20">
      <div className="border-2 p-4">
        <div className="flex items-center">
          <div>
            <img
              className="rounded-full"
              style={{ width: "80px", height: "80px" }}
              src={img}
              alt=""
            />
          </div>
          <div className="ml-7">
            <h1>{name}</h1>
            <small>Mongopol</small>
          </div>
        </div>
        <p className="mt-3">{discription}</p>
      </div>
    </div>
  );
};

export default ClintFeddback;
