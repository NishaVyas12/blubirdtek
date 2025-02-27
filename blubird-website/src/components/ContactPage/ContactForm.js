import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import phoneIcon from "../../assets/images/contact/phone.svg";
import mailIcon from "../../assets/images/contact/mail.svg";
import locationIcon from "../../assets/images/contact/location.svg";
import arrowIcon from "../../assets/images/contact/arrow.svg";
import "../../assets/css/ContactPage/ContactForm.css";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    hearAboutUs: "",
    projectDetails: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);
      if (response.status === 200) {
        toast.success("Your message has been sent successfully!", { position: "top-right", autoClose: 3000 });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          hearAboutUs: "",
          projectDetails: "",
          service: "",
        });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.", { position: "top-right", autoClose: 3000 });
    }
  };

  return (
    <section className="contact-form">
      <ToastContainer />
      <div className="reach-container">
        <div className="reach-contact-info">
          <h2>We're open to talk. Just <span>say hello</span> and we'll start a productive cooperation</h2>
          {/* <div className="reach-info-item">
            <img src={phoneIcon} alt="Phone" />
            <span>9654990703</span>
          </div> */}
          <div className="reach-info-item">
            <img src={mailIcon} alt="Email" />
            <span>hello@blubirdtek.com</span>
          </div>
          <div className="reach-info-item">
            <img src={locationIcon} alt="Location" />
            <span>4th Floor, Block 1, Vatika Business Park <br /> Sector 49, Gurgaon, 122018</span>
          </div>
          <hr />
          <h3 className="car_title">Careers</h3>
          <span>BluBird is always in search of great humans looking to grow. If you think you’re a fit, then we’ve got a seat for you.</span>
          <p>hello@blubirdtek.com</p>
        </div>

        <div className="reach-contact-form">
          <form onSubmit={handleSubmit}>
            <div className="reach-input-group">
              <div className="reach-input-box">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="reach-input-box">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="reach-input-group">
              <div className="reach-input-box">
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="reach-input-box">
                <label>Phone Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div className="reach-input-group">
              <div className="reach-input-box">
                <label>Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
              </div>
              <div className="reach-input-box">
                <label>How did you hear about us?</label>
                <input type="text" name="hearAboutUs" value={formData.hearAboutUs} onChange={handleChange} />
              </div>
            </div>
            <div className="reach-input-box desc">
              <label>Tell us about your project</label>
              <textarea name="projectDetails" rows="4" value={formData.projectDetails} onChange={handleChange}></textarea>
            </div>
            <h3 className="radio-title">What services are you interested in?</h3>
            <div className="reach-radio-group">
              {["Branding", "Website", "UI/UX Design", "Search Marketing", "Content Creation", "AI & Automation", "Creative Direction", "Strategy"].map((service) => (
                <label key={service}>
                  <input type="radio" name="service" value={service} checked={formData.service === service} onChange={handleChange} /> {service}
                </label>
              ))}
            </div>
            <button type="submit" className="reach-button">
              Submit
              <img src={arrowIcon} alt="→" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
