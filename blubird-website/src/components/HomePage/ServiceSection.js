import React, { useEffect } from "react";
import "../../assets/css/HomePage/SectionService.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import grid from "../../assets/images/Service/grid.png";
import crm from "../../assets/images/Service/crm.mp4";
import video2 from "../../assets/images/Service/video2.mp4";
import video3 from "../../assets/images/Service/video3.mp4";
gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
    useEffect(() => {
        const animate = () => {
            if (window.innerWidth > 440) {
                gsap.to(".container.white", {
                    scale: 0.7,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".rail-about",
                        start: "top 0%",
                        end: "bottom 100%",
                        scrub: true,
                    },
                });

                gsap.to(".container.services", {
                    scale: 0.7,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".rail-services",
                        start: "top 0%",
                        end: "bottom 100%",
                        scrub: true,
                    },
                });

                gsap.to(".container.portfolio", {
                    scale: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".rail-portfolio",
                        start: "top 0%",
                        end: "bottom 110%",
                        scrub: true,
                    },
                });

                gsap.from(".myphoto", {
                    height: 0,
                    scrollTrigger: {
                        trigger: ".section.about",
                        start: "top 20%",
                        end: "bottom 280%",
                        scrub: 1,
                    },
                });
            }
        };

        animate();
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

const handleNavigation = (url) => {
    window.location.href = url; 
};

return (
<div id="about" className="section about">
    <div className="rail-about">
        <div className="container white">
            <div className="about-content-container">
                <div className="section-container">
                <div className="text-content">
                        <h1>Launchpad</h1>
                        <p>Start strong with BIS Launchpad. We help you build, scale, and dominate the digital
                        space. We'll get you online, optimized, and ready to grow.</p>
                        {/* <a href="/launchpad" className="button" onClick={() => handleNavigation("/launchpad")}>Know More →</a> */}
                        <a href="#" className="button">Know More →</a>
                        <div className="logos-container">
                            <div className="logos-marquee">
                                <span className="logo">ogogipsum</span>
                                <span className="logo"><img src="path-to-logo1.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo2.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo3.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo">|</span>
                               
                                <span className="logo">ogogipsum</span>
                                <span className="logo"><img src="path-to-logo1.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo2.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo3.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo">|</span>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <button className="service-button">Marketplace Management (B2B and B2C)</button>
                            <button className="service-button">Website Development</button>
                            <button className="service-button">UI/UX</button>
                            <button className="service-button">Global Marketplaces</button>
                            <button className="service-button">Global Marketplace Performance Ads</button>
                            <button className="service-button">Dropship Listing & Management</button>
                            <button className="service-button">Amazon Brand Store</button>
                            <button className="service-button">Web Page Ideation</button>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={grid} alt="Base Image" className="base-image" />
                        <div className="video-mask shape1">
                            <video autoPlay muted loop className="masked-video">
                                <source src={crm} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="rail-services">
        <div className="container services">
            <div className="section-container-reverse">
                <div className="image-container-reverse">
                    <img src={grid} alt="Base Image" className="base-image" />
                    <div className="video-mask shape2">
                        <video autoPlay muted loop className="masked-video">
                            <source src={video2} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="text-content-reverse">
                    <h1>Elevate</h1>
                    <p>Stand out in the crowded digital world. Our branding, storytelling, and creative content
                    strategies are designed to capture attention and make your brand unforgettable.</p>
                    <a href="#" className="button">Know More →</a>
                    <div className="logos-container">
                            <div className="logos-marquee">
                                <span className="logo">ogogipsum</span>
                                <span className="logo"><img src="path-to-logo1.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo2.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo3.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo">|</span>
                               
                                <span className="logo">ogogipsum</span>
                                <span className="logo"><img src="path-to-logo1.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo2.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo3.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo">|</span>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <button className="service-button">Brand Strategy</button>
                            <button className="service-button">Brand Identity Creation</button>
                            <button className="service-button">PR and Communication</button>
                            <button className="service-button">Content Creation</button>
                            <button className="service-button">Packaging and brand collaterals</button>
                            <button className="service-button">Influencer Marketing</button>
                            
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div className="rail-portfolio">
        <div className="container portfolio">
            <div className="about-content-container">
                <div className="section-container">
                    <div className="text-content">
                        <h1>Performance</h1>
                        <p>Fuel your growth with precision marketing. Our marketing wizards uses analytics, PPC
                        optimization, and SEO strategies to convert clicks into customers and drive ROI.</p>
                        <a href="#" className="button">Know More →</a>
                        <div className="logos-container">
                            <div className="logos-marquee">
                                <span className="logo">ogogipsum</span>
                                <span className="logo"><img src="path-to-logo1.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo2.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo3.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo">|</span>
                               
                                <span className="logo">ogogipsum</span>
                                <span className="logo"><img src="path-to-logo1.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo2.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo"><img src="path-to-logo3.png" alt="Logoipsum" className="logo-icon" /> Logoipsum</span>
                                <span className="logo">|</span>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <button className="service-button">Monthly Search Engine Optimization Package</button>
                            <button className="service-button">Performance Marketing</button>
                            <button className="service-button">Content Marketing</button>
                            <button className="service-button">Social media marketing</button>
                            <button className="service-button">Marketing Metrics</button>
                            <button className="service-button">Personal Branding</button>
                            
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={grid} alt="Base Image" className="base-image" />
                        <div className="video-mask shape3">
                            <video autoPlay muted loop className="masked-video">
                                <source src={video3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default ServiceSection;
