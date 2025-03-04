import { useState, useEffect } from "react";
import "../../assets/css/HomePage/HeroSection.css";
import "../../assets/css/HomePage/BirdSection.css";
import logo from "../../assets/images/logo_new.svg"; 
import birdImage from "../../assets/images/bird.png"; 
import crmVideo from "../../assets/images/Service/crm.mp4"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleNavigation = (url) => {
    window.location.href = url; 
  };

  useEffect(() => {
    if (window.innerWidth > 768) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".new-body",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true,
        }
      });

      tl.to(".video-mask1", { 
        width: "650vw",
        height: "650vh",
        duration: 1, 
        ease: "power2.inOut" 
      }, 0)
        .to(".new-body", { opacity: 0, duration: 1, ease: "power2.inOut" }, 0.5)
        .to(".bird", { opacity: 1, duration: 1, ease: "power2.inOut" }, 0.5);

      let tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".bird",
          start: "top top",
          end: "+=400%",
          scrub: 1,
          pin: true, 
        }
      });

      tl2.to(".video-mask1", { width: "0vw", height: "0vh", ease: "power2.inOut" });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <>
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

      {/* SVG Mask */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="video-mask" clipPathUnits="objectBoundingBox">
            <path d="M0.25,0 H0 V0.5 C0,0.776,0.224,1,0.5,1 C0.776,1,1,0.776,1,0.5 V0 H0.75 C0.612,0,0.5,0.112,0.5,0.25 C0.5,0.112,0.388,0,0.25,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Video Mask Container */}
      <div className="video-container1">
        <div className="video-mask1">
          <video className="masked-video1" autoPlay loop muted playsInline>
            <source src={crmVideo} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Bird Section (Second Section) */}
      <section className="bird">
        <h2>
          Why be a lone sparrow when<br /> you can flock with BluBird? Together, we'll navigate<br /> the currents of the market.
        </h2>
        <div className="wire-container">
          <img src={birdImage} className="birds" alt="Birds on a Wire" />
        </div>
      </section>
    </>
  );
};

export default HomePage;