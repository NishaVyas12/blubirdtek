import React from 'react';
import "../../assets/css/Launchpad/LaunchWork.css";
import img1 from "../../assets/images/Launchpad/img1.png";
import img2 from "../../assets/images/Launchpad/img2.png";
import img3 from "../../assets/images/Launchpad/img3.png"; 
import img4 from "../../assets/images/Launchpad/img4.png"; 
import img5 from "../../assets/images/Launchpad/img5.png";
import img6 from "../../assets/images/Launchpad/img6.png";

const LaunchWork = () => {
  return (
    <div className="launch_work">
      <div className="launch_work-container">
        <div className="launch_work-card">
          <img 
            src={img1} 
            alt="Waterfall" 
            className="launch_work-image"
          />
          <h3 className="launch_work-title">Marketplace Management (B2B and B2C)</h3>
          <h4 className="launch_work-brand">Madmix</h4>
          <p className="launch_work-description">
            Designing a masaledar brand identity for India's newest snacking brand
          </p>
        </div>
        <div className="launch_work-card">
          <img 
            src={img2} 
            alt="Night Street" 
            className="launch_work-image"
          />
          <h3 className="launch_work-title">Website Development</h3>
          <h4 className="launch_work-brand">Madmix</h4>
          <p className="launch_work-description">
            Designing a masaledar brand identity for India's newest snacking brand
          </p>
        </div>
        <div className="launch_work-card">
          <img 
            src={img3} 
            alt="New Image 3" 
            className="launch_work-image"
          />
          <h3 className="launch_work-title">New Project 1 (e.g., Branding)</h3>
          <h4 className="launch_work-brand">Madmix</h4>
          <p className="launch_work-description">
            Designing a masaledar brand identity for India's newest snacking brand
          </p>
        </div>
        <div className="launch_work-card">
          <img 
            src={img4} 
            alt="New Image 4" 
            className="launch_work-image"
          />
          <h3 className="launch_work-title">New Project 2 (e.g., Digital Marketing)</h3>
          <h4 className="launch_work-brand">Madmix</h4>
          <p className="launch_work-description">
            Designing a masaledar brand identity for India's newest snacking brand
          </p>
        </div>
        <div className="launch_work-card">
          <img 
            src={img5} 
            alt="New Image 4" 
            className="launch_work-image"
          />
          <h3 className="launch_work-title">New Project 2 (e.g., Digital Marketing)</h3>
          <h4 className="launch_work-brand">Madmix</h4>
          <p className="launch_work-description">
            Designing a masaledar brand identity for India's newest snacking brand
          </p>
        </div>
        <div className="launch_work-card">
          <img 
            src={img6} 
            alt="New Image 4" 
            className="launch_work-image"
          />
          <h3 className="launch_work-title">New Project 2 (e.g., Digital Marketing)</h3>
          <h4 className="launch_work-brand">Madmix</h4>
          <p className="launch_work-description">
            Designing a masaledar brand identity for India's newest snacking brand
          </p>
        </div>
      </div>
    </div>
  );
};

export default LaunchWork;