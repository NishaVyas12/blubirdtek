import React from "react";
import "../../assets/css/BISElevate/BISElevatePortfolio.css";
import portfolioBanner from "../../assets/images/BISElevate/portfoliobanner.png";
import portfolio1 from "../../assets/images/BISElevate/portfolio1.png";
import portfolio2 from "../../assets/images/BISElevate/portfolio2.png";
import portfolio3 from "../../assets/images/BISElevate/portfolio3.png";
import portfolio4 from "../../assets/images/BISElevate/portfolio4.png";
import portfolio5 from "../../assets/images/BISElevate/portfolio5.png";
import portfolio6 from "../../assets/images/BISElevate/portfolio6.png";


const BISElevatePortfolio = () => {
  return (
    <div className="elevate-portfolio">
      <div className="elevate-image-banner">
        <img src={portfolioBanner} alt="Banner Image" />
      </div>

      <div className="elevate-portfolio-container">
        <img src={portfolio1} alt="Image 1" />
        <img src={portfolio2} alt="Image 2" />
      </div>

      <div className="elevate-extra-image-container">
        <img src={portfolio3} alt="Image 3" />
        <img src={portfolio4} alt="Image 4" />
        <img src={portfolio5} alt="Image 5" />
      </div>

      <div className="elevate-image-banner">
        <img src={portfolio6} alt="Banner Image" />
      </div>
    </div>
  );
};

export default BISElevatePortfolio;
