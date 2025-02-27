import React from "react";
import "../../assets/css/HomePage/BirdSection.css";
import birdImage from "../../assets/images/bird.png"; 

const BirdSection = () => {
    return (
        <section className="bird">
            <h2>
            Great things happen when you take flight. <br />At BIS, we embrace bold risks, soar above the competition,
            <br /> and prove that innovation leads to success.
            </h2>
            <div className="wire-container">
                <img src={birdImage} className="birds" alt="Birds on a Wire" />
            </div>
            <div class="bottom-text">Your Design Wishlist <span>Checked</span> Off!</div>
        </section>
    );
};

export default BirdSection;
