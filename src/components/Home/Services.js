import React from "react";
import wev from "../../images/icons/service1.png";
import graphics from "../../images/icons/service2.png";
import webdev from "../../images/icons/service3.png";
import "./Services.css";

const Services = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="mx-10">
        <h1 className="text-center text-3xl mb-10">
          Provide awesome <span className="text-green-500">services</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto">
          <div>
            <div class="card w-96 bg-base-100 shadow-xl box">
              <figure class="px-10 pt-10 ">
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={wev}
                  alt="Shoes"
                  class="rounded-full"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Web & Mobile design</h2>
                <p>
                  We craft stunning and amazing web UI, using a well drrafted UX
                  to fit your product.stand out
                </p>
                <div class="card-actions">
                  <button class="btn btn-primary rounded-lg px-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>{" "}
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card w-96 bg-base-100 shadow-xl box">
              <figure class="px-10 pt-10 ">
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={graphics}
                  alt="Shoes"
                  class="rounded-full"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Graphic design</h2>
                <p>
                  Amazing flyers, social media posts and brand representations
                  that would make your brand stand out.
                </p>
                <div class="card-actions">
                  <button class="btn btn-primary rounded-lg px-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>{" "}
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="card w-96 bg-base-100 shadow-xl box">
              <figure class="px-10 pt-10 ">
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={webdev}
                  alt="Shoes"
                  class="rounded-full"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Web development</h2>
                <p>
                  With well written codes, we build amazing apps for all
                  platforms, mobile and web apps in general.
                </p>
                <div class="card-actions">
                  <button class="btn btn-primary rounded-lg px-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>{" "}
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
