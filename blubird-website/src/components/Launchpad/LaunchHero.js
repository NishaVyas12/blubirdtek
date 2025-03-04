import React from "react";
import "../../assets/css/Launchpad/LaunchHero.css"; 
import Hero from "../../assets/images/Launchpad/hero.png"; 
import logo1 from "../../assets/images/Launchpad/logo1.png";
import logo2 from "../../assets/images/Launchpad/logo2.png";
import logo3 from "../../assets/images/Launchpad/logo3.png";
import { useState } from "react";
import logo from "../../assets/images/logo_new.svg"; 
import sitelogo from "../../assets/images/sitelogo.svg";

const LaunchHero = () => {
  const [menuActive, setMenuActive] = useState(false);
  
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
  
    const handleNavigation = (url) => {
      window.location.href = url; 
    };
  
  const services = [
    "Marketplace Management (B2B and B2C)",
    "Website Development",
    "UI/UX",
    "Global Marketplaces",
    "Global Marketplace Performance Ads",
    "Dropship Listing & Management",
    "Amazon Brand Store",
    "Web Page Ideation",
  ];

  return (
    <div className="new-body">
      <header className="new-header">
        <nav>
        <div className="new-header-container">
        <img src={sitelogo} alt="Logo" className="new-nav-logo" />
        <div className="new-menu-icon" onClick={toggleMenu}>☰</div>
    </div>
          
        </nav>
      </header>

      <div className={`new-nav-menu ${menuActive ? "active" : ""}`} id="navMenu">
        <div className="new-nav-header">
          <img src={logo} alt="Logo" />
        </div>
        <span className="new-close-btn" onClick={toggleMenu}>CLOSE</span>
        <div className="new-nav-content">
          <ul>
            <li><a href="/" onClick={() => handleNavigation("/")}>HOME</a></li>
            <li><a href="/" onClick={() => handleNavigation("/work")}>WORK</a></li>
            <li><a href="/" onClick={() => handleNavigation("/elevate")}>ELEVATE</a></li>
            <li><a href="/" onClick={() => handleNavigation("/about")}>ABOUT</a></li>
            <li><a href="/contact" onClick={() => handleNavigation("/contact")}>CONTACT</a></li> 
          </ul>
        </div>
      </div>
    <div className="launch_hero_homepage-container">
      <div className="launch_hero_homepage-content">
        <div className="launch_hero_homepage-text">
          <p className="launch_desc">BIS Launchpad</p>
          <h1>Integrating augmented reality elevate social commerce</h1>
          <p>
            Created a striking lilac landing page that enhances global visibility,
            showcasing their innovative telecom services with a sleek design and
            clear call-to-action.
          </p>
          <div className="launch_hero_homepage-logos">
            <img src={logo1} alt="Logoipsum 1" className="launch_hero_homepage-logo" />
            <img src={logo2} alt="Logoipsum 2" className="launch_hero_homepage-logo" />
            <img src={logo3} alt="Logoipsum 3" className="launch_hero_homepage-logo" />
            <img src={logo1} alt="Logoipsum 1" className="launch_hero_homepage-logo" />
            <img src={logo2} alt="Logoipsum 2" className="launch_hero_homepage-logo" />
            <img src={logo3} alt="Logoipsum 3" className="launch_hero_homepage-logo" />
            <img src={logo1} alt="Logoipsum 1" className="launch_hero_homepage-logo" />
            <img src={logo2} alt="Logoipsum 2" className="launch_hero_homepage-logo" />
            <img src={logo3} alt="Logoipsum 3" className="launch_hero_homepage-logo" />
          </div>
          <div className="launch_hero_homepage-services">
            {services.map((service, index) => (
              <button key={index} className="launch_hero_homepage-service-btn">
                {service}
              </button>
            ))}
          </div>
        </div>
        <div className="launch_hero_homepage-image-container">
          <img src={Hero} alt="Person with bubble" className="launch_hero_homepage-person-image" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default LaunchHero;