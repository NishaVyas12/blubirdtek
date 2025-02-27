import React from "react";
import "../../assets/css/ContactPage/GoogleMap.css";

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4379401992846!2d77.04449924999999!3d28.40603955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22921010783d%3A0x694571c723bca467!2sVATIKA%20BUSINESS%20PARK%2C%20Badshahpur%20Sohna%20Rd%20Hwy%2C%20Block%20W%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1739443024609!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
