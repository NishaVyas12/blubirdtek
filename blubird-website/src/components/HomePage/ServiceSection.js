import React, { useEffect } from "react";
import "../../assets/css/HomePage/SectionService.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import grid from "../../assets/images/Service/grid.png";
import crm from "../../assets/images/Service/crm.mp4";
import shape1 from "../../assets/images/Service/shape1.svg";
import video2 from "../../assets/images/Service/video2.mp4";
import shape2 from "../../assets/images/Service/shape2.svg";
import video3 from "../../assets/images/Service/video3.mp4";
import shape3 from "../../assets/images/Service/shape3.svg";
import video4 from "../../assets/images/Service/video4.mp4";
import shape4 from "../../assets/images/Service/shape4.png";



// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
    useEffect(() => {
        // Dynamically add GSAP CDN scripts
        const addScript = (src) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
            return script;
        };

        const gsapScript = addScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.0/gsap.min.js");
        const scrollTriggerScript = addScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.0/ScrollTrigger.min.js");

        // GSAP Animations (Run after scripts load)
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
                if (window.innerWidth > 440) {
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
                }
                if (window.innerWidth > 440) {
                    gsap.to(".container.portfolio", {
                        scale: 0.7,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: ".rail-portfolio",
                            start: "top 0%",
                            end: "bottom 100%",
                            scrub: true,
                        },
                    });
                }
                gsap.to(".container.capabilities", {
                    scale: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".rail-capabilities",
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

        // Wait until GSAP is loaded before running animations
        gsapScript.onload = () => {
            scrollTriggerScript.onload = animate;
        };

        // Cleanup: Remove scripts when component unmounts
        return () => {
            document.body.removeChild(gsapScript);
            document.body.removeChild(scrollTriggerScript);
        };
    }, []);

    return (
       // React Code
<div id="about" className="section about">
    <div className="rail-about">
        <div className="container white">
            <div className="about-content-container">
                <div className="section-container">
                    <div className="text-content">
                        <h1>Launchpad</h1>
                        <p>Empowering businesses to launch and sale their products and services digitally.</p>
                        <a href="#" className="button">Know More →</a>
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
                    <p>Elevating your brand and digital strategy to captivate audiences and amplify your market impact.</p>
                    <a href="#" className="button">Know More →</a>
                </div>
            </div>
        </div>
    </div>
    <div className="rail-portfolio">
        <div className="container portfolio">
            <div className="about-content-container">
                <div className="section-container">
                    <div className="text-content">
                        <h1>Synergy</h1>
                        <p>Integrate CRM, automation, and customer experience for stronger relationships and better results.</p>
                        <a href="#" className="button">Know More →</a>
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
    <div className="rail-capabilities">
        <div id="Capabilities" className="container capabilities">
            <div className="section-container-reverse">
                <div className="image-container-reverse">
                    <img src={grid} alt="Base Image" className="base-image" />
                    <div className="video-mask shape4">
                        <video autoPlay muted loop className="masked-video">
                            <source src={video4} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <div className="text-content-reverse">
                    <h1>Performance</h1>
                    <p>Optimize campaigns with data insights, performance tracking, and SEO that deliver measurable results.</p>
                    <a href="#" className="button">Know More →</a>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default ServiceSection;
