import React from "react";
import "../../assets/css/WorkPage/WorkPortfolio.css"; 
import portfolio1 from "../../assets/images/Work/portfolio1.png";
import portfolio2 from "../../assets/images/Work/portfolio2.png";
import portfoliobanner from "../../assets/images/Work/portfoliobanner.png";

const Portfolio = () => {
  return (
    <div className="work-portfolio-container">
      <div className="work-portfolio-grid-container">
        <img src={portfolio1} alt="Image 1" />
        <img src={portfolio2} alt="Image 2" />
      </div>
      <div className="work-portfolio-image-banner">
        <img src={portfoliobanner} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Portfolio;
