import React from "react";
import "../../assets/css/HomePage/AwardsSection.css";
import award from "../../assets/images/award.png";
export default function AwardsSection() {
  return (
    <section className="awards-section">
      <div className="award-title">
        <h2>Made to Grow Big</h2>
      </div>

      <div className="awards-container">
        {/* Left Side (Text) */}
        <div className="awards-text">
          <p className="awards-heading">AWARDS / NOMINATIONS</p>
          <p className="awards-description">
            We've picked up a few branding and web design awards along the way.
            They're just a fun reminder that the hard work and creativity pay off.
            It's nice to have the recognition and know that other designers find our work
            as awesome as we do!
          </p>
        </div>

        {/* Right Side (Image) */}
        <div className="awards-image">
          <img
            src={award}
            alt="Awards"
          />
        </div>
      </div>
    </section>
  );
}
