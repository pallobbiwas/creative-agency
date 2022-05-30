import React from "react";
import airban from "../../images/logos/airbnb.png";
import google from "../../images/logos/google.png";
import netflix from "../../images/logos/netflix.png";
import slack from "../../images/logos/slack.png";
import uber from "../../images/logos/uber.png";

const Brand = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-20">
        <div className="grid gris-cols-1 md:grid-cols-5 my-20">
          <div>
            <img style={{width: '129px', height:'44px'}} src={slack} alt="" />
          </div>
          <div>
            <img style={{width: '129px', height:'44px'}} src={google} alt="" />
          </div>
          <div>
            <img style={{width: '129px', height:'44px'}} src={uber} alt="" />
          </div>
          <div>
            <img style={{width: '129px', height:'44px'}} src={netflix} alt="" />
          </div>
          <div>
            <img style={{width: '129px', height:'44px'}} src={airban} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
