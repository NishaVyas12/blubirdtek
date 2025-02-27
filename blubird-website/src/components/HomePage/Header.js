import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/HomePage/Header.css";
import logo from "../../assets/images/logo.svg";
import { BiMenu, BiX } from "react-icons/bi";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleNavigation = (url) => {
    window.location.href = url; 
  };
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="BluBird Logo" />
            </div>
            <nav className={`head_nav ${menuOpen ? "open" : ""}`}>
                <div className="close" onClick={() => setMenuOpen(false)}>
                    <BiX />
                </div>
                <ul>
                    <li><Link to="/" onClick={() => handleNavigation("/")}>Home</Link></li>
                    <li><Link to="/" onClick={() => handleNavigation("/")}>Work</Link></li>
                    <li><Link to="/" onClick={() => handleNavigation("/")}>Elevate</Link></li>
                    <li><Link to="/" onClick={() => handleNavigation("/")}>About</Link></li>
                    <li><Link to="/" onClick={() => handleNavigation("/")}>Career</Link></li>
                </ul>
            </nav>
            <BiMenu 
                className="menu-icon" 
                onClick={() => setMenuOpen(!menuOpen)} 
                style={{ fontSize: "24px", cursor: "pointer", color: "#fff" }}
            />
        </header>
    );
};
export default Header;