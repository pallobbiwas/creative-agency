import React from "react";
import img1 from "../../images/customer-1.png";
import img2 from "../../images/customer-2.png";
import img3 from "../../images/customer-3.png";

const ClintFeddback = () => {
  return (
    <div className="container mx-auto my-20">
        <h1 className="text-3xl text-center mb-10">Clients <span className="text-green-500">Feedback</span></h1>
      <div className="mx-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-2 p-4">
          <div className="flex items-center">
            <div>
              <img style={{ width: "80px" }} src={img1} alt="" />
            </div>
            <div className="ml-7">
              <h1>Nash Patrik</h1>
              <small>Mongopol</small>
            </div>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            voluptatum nobis temporibus deleniti dolor quae distinctio, delectus
            consequatur suscipit soluta?
          </p>
        </div>
        <div className="border-2 p-4">
          <div className="flex items-center">
            <div>
              <img style={{ width: "80px" }} src={img2} alt="" />
            </div>
            <div className="ml-7">
              <h1>Miriam Barron</h1>
              <small>CEO, Mongopol</small>
            </div>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            voluptatum nobis temporibus deleniti dolor quae distinctio, delectus
            consequatur suscipit soluta?
          </p>
        </div>
        <div className="border-2 p-4">
          <div className="flex items-center">
            <div>
              <img style={{ width: "80px" }} src={img3} alt="" />
            </div>
            <div className="ml-7">
              <h1>Nash Patrik</h1>
              <small>CEO, Mongopol</small>
            </div>
          </div>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            voluptatum nobis temporibus deleniti dolor quae distinctio, delectus
            consequatur suscipit soluta?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClintFeddback;
