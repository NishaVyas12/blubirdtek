import React from "react";
import "../../assets/css/WorkPage/WorkPortfolio2.css"; 
import portfolio4 from "../../assets/images/Work/portfolio4.png";
import portfolio5 from "../../assets/images/Work/portfolio5.png";
import portfolio6 from "../../assets/images/Work/portfolio6.png";
import portfolio7 from "../../assets/images/Work/portfolio7.png";

const ImageLayout = () => {
  return (
    <div className="workportfolio2">
      <div className="workportfolio2-extra-image-container">
        <img src={portfolio4} alt="Image 3" />
        <img src={portfolio5} alt="Image 4" />
        <img src={portfolio6} alt="Image 5" />
      </div>
      <div className="workportfolio2-image-banner">
        <img src={portfolio7} alt="Banner Image" />
      </div>
    </div>
  );
};

export default ImageLayout;
