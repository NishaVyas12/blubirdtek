import React from "react";
import "../../assets/css/HomePage/BirdSection.css";
import birdImage from "../../assets/images/bird.png"; 

const BirdSection = () => {
    return (
        <section className="bird">
            <h2>
            Why be a lone sparrow when<br /> you can flock with BluBird? Together, we'll navigate<br /> the currents of the market.
            </h2>
            <div className="wire-container">
                <img src={birdImage} className="birds" alt="Birds on a Wire" />
            </div>
            <div class="bottom-text">Your Design Wishlist <span>Checked</span> Off!</div>
        </section>
    );
};

export default BirdSection;
