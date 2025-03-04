import React, { useEffect, useRef } from "react";
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/css/HomePage/ProjectSection.css";
import video2 from "../../assets/images/Homepage/video2.mp4";
import img2 from "../../assets/images/Homepage/img2.JPG";
import img1 from "../../assets/images/Homepage/img1.jpg";
import img6 from "../../assets/images/Homepage/img6.jpg";
import video3 from "../../assets/images/Homepage/video3.mp4";
import img3 from "../../assets/images/Homepage/img3.jpg";
import video1 from "../../assets/images/Homepage/video1.mp4";
import img7 from "../../assets/images/Homepage/img7.jpg";
import img5 from "../../assets/images/Homepage/img5.jpg";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const galleryRef = useRef(null);
  const sectionRef = useRef(null);
  const revealContentRef = useRef(null); 

  useEffect(() => {
    const animate = () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, 
          pin: true, 
          anticipatePin: 1, 
          pinSpacing: false, 
        },
      });

      timeline
        .to(galleryRef.current, { scale: 2, opacity: 1, duration: 2 }) 
        .to(galleryRef.current, { opacity: 1, duration: 0.5 }, "+=0.5") 
        .to(revealContentRef.current, { opacity: 1, y: 0, duration: 1 }); 
    };

    animate();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); 

  return (
    <>
      <div className="projectsection_heading">
        <h2>Not just projects, but power moves</h2>
      </div>
      <div ref={sectionRef} className="project_section">
        <div className="projectsection_gallery-container" ref={galleryRef}>
          <div className="projectsection_gallery">
            <div className="projectsection_gallery-item">
              <video autoPlay muted loop>
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="projectsection_gallery-item">
              <img src={img2} alt="Project image 2" />
            </div>
            <div className="projectsection_gallery-item">
              <img src={img1} alt="Project image 1" />
            </div>
            <div className="projectsection_gallery-item">
              <img src={img6} alt="Project image 6" />
            </div>
            <div className="projectsection_gallery-item">
              <video autoPlay muted loop>
                <source src={video3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="projectsection_gallery-item">
              <img src={img3} alt="Project image 3" />
            </div>
            <div className="projectsection_gallery-item">
              <video autoPlay muted loop>
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="projectsection_gallery-item">
              <img src={img7} alt="Project image 7" />
            </div>
            <div className="projectsection_gallery-item">
              <img src={img5} alt="Project image 5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;