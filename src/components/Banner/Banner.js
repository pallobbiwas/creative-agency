import React from "react";
import fram from "../../images/logos/Frame.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-div pt-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mr-6 text-center md:text-left">
            <h2 className="text-6xl font-bold" style={{ color: "#111430" }}>
              Let’s Grow Your Brand To The Next Level
            </h2>
            <p className="my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              itaque harum maiores consequatur beatae provident nesciunt culpa
              nemo? Mollitia, recusandae. Suscipit, esse laudantium? Dolores
              ratione fugit dignissimos tempore molestiae voluptate.
            </p>
            <div>
              <button
                style={{ background: "#111430" }}
                className=" btn rounded-md px-14"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    clipRule="evenodd"
                  />
                </svg>
                Hire me
              </button>
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
