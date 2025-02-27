import { useEffect, useState } from "react";
import "../../assets/css/HomePage/ScrollprojectSection.css";

import img1 from "../../assets/images/Homepage/project1.png";
import img2 from "../../assets/images/Homepage/project2.png";
import img3 from "../../assets/images/Homepage/project3.png";
import img4 from "../../assets/images/Homepage/project4.png";
import img5 from "../../assets/images/Homepage/project5.png";
import img6 from "../../assets/images/Homepage/project6.png";

const projectData = [
  {
    name: "CELLAR DOOR",
    date: "09.02.24",
    image: img1,
    content: [
      "UX Designing",
      "Creating synergy between people, processes, & technology to build meaningful customer experience & driving market excellence."
    ]
  },
  {
    name: "7o3 SKINCARE",
    date: "10.03.24",
    image: img6, 
    content: ["Social Media", "Website Relaunch", "Performance Marketing", "Marketplace Management"]
  },
  {
    name: "LAMINAR",
    date: "11.04.24",
    image: img4, 
    content: ["HubSpot", "Corporate Website Development"]
  },
  {
    name: "ZEPHYR",
    date: "12.05.24",
    image: img3, 
    content: ["Website Development", "Social Media", "Performance Marketing", "Marketplace Management", "PR & Communication"]
  },
  {
    name: "RMX INDUSTRIES",
    date: "13.06.24",
    image: img2,
    content: ["Branding & Merchandise", "Product Packaging", "HubSpot", "PR & Communication"]
  },
  {
    name: "EPW",
    date: "13.06.24",
    image: img5,
    content: ["Social Media", "Custom Marketplace Development", "Branding"]
  }
];

const ScrollprojectSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const checkVisibility = () => {
      let currentIndex = -1;
      const sections = document.querySelectorAll(".scrollproject_section");
      const normalSections = document.querySelectorAll(".scrollproject_normal-section");

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentIndex = index;
        }
      });

      setActiveIndex(currentIndex);

      const isInNormalSection = Array.from(normalSections).some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });

      if (isInNormalSection || currentIndex === -1) {
        setActiveIndex(-1);
      }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div>
  <div
    className={`scrollproject_fixed-heading ${activeIndex !== -1 ? "scrollproject_active-heading" : ""}`}
    id="fixed-heading"
  >
    {activeIndex !== -1 ? projectData[activeIndex].name : ""}
  </div>

  <div
    className={`scrollproject_text-overlay ${
      activeIndex !== -1 ? "scrollproject_active-overlay" : "scrollproject_hidden"
    }`}
  >
    <div className="scrollproject_text-content">
      {activeIndex !== -1 &&
        projectData[activeIndex].content.map((text, idx) => <p key={idx}>{text}</p>)}
    </div>
    <div className="scrollproject_bottom-section">
      
      <a href="#" className="scrollproject_btn">
        View Project
      </a>
    </div>
  </div>

  {projectData.map((project, index) => (
    <div
      key={index}
      className="scrollproject_section"
      style={{ backgroundImage: `url(${project.image})` }}
    ></div>
  ))}
</div>

  );
};

export default ScrollprojectSection;
