import React from "react";
import "../../assets/css/ContactPage/ContactHeroSection.css";
import Map from "../../assets/images/contact/Map.svg";

const ContactHeroSection = () => {
    return (
        <>
            <section className="contact-hero">
                <h1>
                    Let's <div className="contact-roller">
                        <span>Create</span>
                        <span>Build</span>
                        <span>Shape</span>
                        <span>Create</span>
                        <span>Build</span>
                        <span>Shape</span>
                    </div><br />
                    <div className="contact-content-wrapper">
                        <span>Something Great</span>
                    </div>
                </h1> 
                <p className="contact_description">
                    Empowering businesses to launch and scale their products and <br />services digitally.
                </p>
            </section>

            <section className="map-container">
                <div className="map">
                    <img src={Map} alt="World Map" style={{ width: "100%", height: "100%", objectFit: "cover" }} />

                    <div className="dot" style={{ top: "25%", left: "40%" }}></div>
                    <div className="client-info" style={{ top: "22%", left: "40%" }}>Client 1: BluBird Industries</div>

                    <div className="dot" style={{ top: "40%", left: "60%" }}></div>
                    <div className="client-info" style={{ top: "37%", left: "60%" }}>Client 2: Zephyr</div>

                    <div className="dot" style={{ top: "70%", left: "25%" }}></div>
                    <div className="client-info" style={{ top: "67%", left: "25%" }}>Client 3: 7o3</div>

                    <div className="dot" style={{ top: "30%", left: "50%" }}></div>
                    <div className="client-info" style={{ top: "27%", left: "50%" }}>Client 4: Laminar</div>

                    <div className="dot" style={{ top: "55%", left: "15%" }}></div>
                    <div className="client-info" style={{ top: "52%", left: "15%" }}>Client 5: RMX Industries</div>
                </div>
            </section>
        </>
    );
};

export default ContactHeroSection;
