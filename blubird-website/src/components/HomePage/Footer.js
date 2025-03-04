import React, { useState, useEffect } from "react";
import "../../assets/css/HomePage/FooterSection.css";

const textLines = [
    "OUTSMART,",
    "OUTSHINE, OUTPERFORM.",
    "EVERY TIME."
];

const Footer = () => {
    const [displayedText, setDisplayedText] = useState(["", "", ""]);
    const [charIndex, setCharIndex] = useState(0);
    const [isErasing, setIsErasing] = useState(false);

    useEffect(() => {
        let typingSpeed = isErasing ? 50 : 100;
        let timeout;

        // Join all lines into a single string for smooth typing
        const fullText = textLines.join("\n");

        if (!isErasing && charIndex <= fullText.length) {
            timeout = setTimeout(() => {
                setDisplayedText([
                    fullText.slice(0, charIndex).split("\n")[0] || "",
                    fullText.slice(0, charIndex).split("\n")[1] || "",
                    fullText.slice(0, charIndex).split("\n")[2] || ""
                ]);
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (!isErasing) {
            timeout = setTimeout(() => setIsErasing(true), 5000); 
        } else if (isErasing && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayedText([
                    fullText.slice(0, charIndex - 1).split("\n")[0] || "",
                    fullText.slice(0, charIndex - 1).split("\n")[1] || "",
                    fullText.slice(0, charIndex - 1).split("\n")[2] || ""
                ]);
                setCharIndex(charIndex - 1);
            }, typingSpeed);
        } else {
            timeout = setTimeout(() => {
                setIsErasing(false);
                setCharIndex(0);
            }, 1000); 
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isErasing]);

    return (
        <div className="footer-section">  
            <div className="footer-hero updated-hero">
                <h1 className="footer-heading">
                    {displayedText[0]} <br />
                    {displayedText[1]} <br />
                    <span className="footer-highlight">{displayedText[2]}</span>
                </h1>
                <a href="mailto:hello@blubirdtek.com" className="email-button">hello@blubirdtek.com</a>
            </div>
            
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
