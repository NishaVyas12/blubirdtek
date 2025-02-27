import React from "react";
import "../../assets/css/HomePage/FooterSection.css";

const Footer = () => {
    return (
        <div className="footer-section">  
            <div className="footer-hero">
                <h1>LET'S <br /> 
                    <span className="footer-parentheses">(</span>
                    <div className="footer-roller">
                        <span>Work</span>
                        <span>Build</span>
                        <span>Shape</span>
                        <span>Work</span>
                        <span>Build</span>
                        <span>Shape</span>  
                    </div>
                    <span className="footer-parentheses">)</span>
                    <br /> TOGETHER
                </h1>
                <a href="mailto:hello@blubirdtek.com" className="email-button">hello@blubirdtek.com</a>
            </div>
            
            {/* New footer section similar to the screenshot */}
            <footer className="footer-bottom">
                <div className="footer-left">
                    <p className="tagline">Do it once. Do it right.</p>
                    <p className="business-contact">New Business: <br /><a href="mailto:hello@blubirdtek.com">hello@blubirdtek.com</a></p>
                    <div className="newsletter">
                        <p className="newsletter_tag">Sign up for our newsletter</p>
                        <div className="newsletter-input">
                            <input type="email" placeholder="Email" />
                            <button className="submit-btn">→</button>
                        </div>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul className="social-links">
                            <li><a href="#">Instagram →</a></li>
                            <li><a href="#">LinkedIn →</a></li>
                            <li><a href="#">Facebook →</a></li>
                            <li><a href="#">Pinterest →</a></li>
                        </ul>
                    </div>
                    <p className="address">
                        4th Floor, Block 1, Vatika Business Park, Sector 49, Gurgaon, 122018
                    </p>
                </div>
            </footer>

            <div className="footer-legal">
                <span>BluBird Pvt Ltd. 2025</span>
                <span>|</span>
                <span>All Rights Reserved</span>
                <span>|</span>
                <a href="#">Privacy Policy</a>
                <span>|</span>
                <a href="#">Terms of Service</a>
            </div>
        </div>
    );
};

export default Footer;
