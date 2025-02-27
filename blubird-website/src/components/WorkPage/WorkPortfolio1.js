import React from "react";
import Portfolio3 from "../../assets/images/Work/portfolio3.png"; 
import "../../assets/css/WorkPage/WorkPortfolio1.css";

const WorkPortfolio1 = () => {
  return (
    <section className="workportfolio1">
      <div className="workportfolio1_content">
        <h2>Who is Best Restaurants?</h2>
        <p>
          Best Restaurants is your culinary co-conspirator, dishing out the
          ultimate passport to Australia's dining delights. This isn't just
          about eating; it's about savoring each moment, from buzzy urban
          eateries to serene seaside spots.
        </p>
        <p>
          Whether you're gifting a gourmet getaway or treating yourself, Best
          Restaurants transforms every meal into a tastebud adventure. With a
          gift card that opens doors to a curated selection of dining
          experiences, Best Restaurants invites everyone to the table—foodies,
          families, friends, and first dates.
        </p>
        <p>
          As the culinary scene becomes crowded with choices, Best Restaurants
          stands out by making exceptional dining accessible and exciting,
          offering a taste of something truly special.
        </p>
      </div>

      <div className="workportfolio1_image-container">
        <img src={Portfolio3} alt="Best Restaurants" />
      </div>
    </section>
  );
};

export default WorkPortfolio1;
