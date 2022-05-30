import React from "react";
import img1 from "../../images/carousel-1.png";
import img2 from "../../images/carousel-2.png";
import img3 from "../../images/carousel-3.png";
import img4 from "../../images/carousel-4.png";
import img5 from "../../images/carousel-5.png";
import "./Works.css";

const Works = () => {
  return (
    <div style={{ background: "#111430" }} className="py-32">
      <div>
          <h1 className="text-center text-3xl text-white mb-10">Here are some of <span className="text-green-500">our works</span></h1>
        <div class="carousel carousel-center w-full p-4 space-x-4 rounded-box">
          <div class="carousel-item w-96 h-96">
            <img className="w-96 h-40" src={img1} class="rounded-box" alt="" />
          </div>
          <div class="carousel-item w-96 h-96">
            <img className="w-96 h-40"  src={img2} class="rounded-box" alt="" />
          </div>
          <div class="carousel-item w-96 h-96">
            <img className="w-96 h-40"  src={img3} class="rounded-box" alt="" />
          </div>
          <div class="carousel-item w-96 h-96">
            <img className="w-96 h-40"  src={img4} class="rounded-box" alt="" />
          </div>
          <div class="carousel-item w-96 h-96">
            <img className="w-96 h-40"  src={img5} class="rounded-box" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
