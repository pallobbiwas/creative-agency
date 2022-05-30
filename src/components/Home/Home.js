import React from "react";
import Banner from "../Banner/Banner";
import Brand from "./Brand";
import ClintFeddback from "./ClintFeddback";
import Services from "./Services";
import Works from "./Works";

const Home = () => {
  return (
    <div>
      <Banner />
      <Brand />
      <Services />
      <Works />
      <ClintFeddback />
    </div>
  );
};

export default Home;
