import React from "react";
import "../../assets/css/HomePage/StarHero.css"; 

const StarHero = () => {
  return (
    <section className="star">
      <div className="star_video">
        <video autoPlay muted loop playsInline>
          <source src="/assets/videos/star.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="star_overlay"></div>

      <div className="star_hero">
        <h1>Beyond Digital Marketing - We're Your Growth Partners.</h1>
        <p>
        At BIS, we’re not just about services; we're about building lasting relationships that drive real results and transform your brand for the future.
        </p>
        <button>Explore Purpose →</button>
      </div>
    </section>
  );
};

export default StarHero;
