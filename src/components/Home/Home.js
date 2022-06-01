import React from "react";
import Banner from "../Banner/Banner";
import Brand from "./Brand";
import Footer from "./Footer";
import Reviews from "./Reviews";
import Services from "./Services";
import Works from "./Works";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <Services />
      <Works />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
