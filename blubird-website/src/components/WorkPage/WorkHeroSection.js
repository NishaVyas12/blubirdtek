import React from "react";
import workBanner from "../../assets/images/Work/work-banner.png"; 
import "../../assets/css/WorkPage/WorkHeroSection.css";

const WorkHeroSection = () => {
  return (
    <section className="work-hero-section">
      <img src={workBanner} alt="Work Banner" className="work-hero-image" />
    </section>
  );
};

export default WorkHeroSection;
