import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './ContactIcon.css'

const ContactIcon = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleNavigation = (url) => {
    window.location.href = url; 
  };
  return (
    <div className="contact-icon">
      <Link to='/contact' aria-label="Call us" onClick={() => handleNavigation("/contact")}>
        <FaPhoneAlt />
      </Link>
    </div>
  );
};

export default ContactIcon;
