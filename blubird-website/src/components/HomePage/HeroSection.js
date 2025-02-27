
import { useState } from "react";
import "../../assets/css/HomePage/HeroSection.css";
import logo from "../../assets/images/logo_new.svg"; 

const HeroSection = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleNavigation = (url) => {
    window.location.href = url; 
  };

  return (
    <div className="new-body">
      <header className="new-header">
        <nav>
          <div className="new-menu-icon" onClick={toggleMenu}>☰</div>
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

      <section className="new-hero">
        <div className="new-overlay"></div>
        <div className="new-content">
          <p className="new-subheading">WHAT WE DO</p>
          <h2 className="new-headline">
            BORN TO <br /> GIVE YOUR <span className="new-highlight">BRAND</span> <br /> AN <span className="new-highlight">OOMPH!</span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
