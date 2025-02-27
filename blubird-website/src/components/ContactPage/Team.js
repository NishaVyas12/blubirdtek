import React from "react";
import "../../assets/css/ContactPage/Team.css";

const videoSources = [
  "/assets/videos/1.mp4",
  "/assets/videos/2.mp4",
  "/assets/videos/3.mp4",
  "/assets/videos/4.mp4",
  "/assets/videos/5.mp4",
  "/assets/videos/6.mp4",
  "/assets/videos/7.mp4",
  "/assets/videos/8.mp4",
  "/assets/videos/9.mp4",
  "/assets/videos/10.mp4",
  "/assets/videos/11.mp4",
];

const Team = () => {
  return (
    <div className="video-scroller-container">
      <h2 className="video-scroller-title">
        Meet our original <span className="video-scroller-highlight">Birds?</span>
      </h2>
      <div className="video-scroller">
        <div className="video-scroller-track">
          {[...videoSources, ...videoSources].map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-wrapper">
              <video autoPlay loop muted playsInline onError={() => console.error("Error loading video:", video)}>
                <source src={video} type="video/mp4" />
              </video>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
