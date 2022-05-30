import React from "react";
import fram from "../../images/logos/Frame.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-div pt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mr-6 text-center md:text-left">
            <h2 className="text-6xl font-bold" style={{color:"#111430"}}>Let’s Grow Your Brand To The Next Level</h2>
            <p className="my-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque harum maiores consequatur beatae provident nesciunt culpa nemo? Mollitia, recusandae. Suscipit, esse laudantium? Dolores ratione fugit dignissimos tempore molestiae voluptate.</p>
            <div>
              <button style={{background:"#111430"}} className=" btn rounded-md px-14">Hire me</button>
            </div>
          </div>
          <div className="ml-6">
            <img src={fram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
