import React, { useEffect, useRef } from "react";
import "../../assets/css/ContactPage/Contactwork.css";
import img1 from "../../assets/images/contact/img1.png";
import img2 from "../../assets/images/contact/img2.png";
import img3 from "../../assets/images/contact/img3.png";
import img4 from "../../assets/images/contact/img4.png";

const services = [
    { img: img4},
    { img: img3},
    { img: img2},
    { img: img1},
];

const Contactwork = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        let scrollAmount = 0;

        const scroll = () => {
            if (!container) return;

            scrollAmount -= 1; 
            if (Math.abs(scrollAmount) >= container.scrollWidth / 2) {
                scrollAmount = 0; 
            }
            container.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(scroll);
        };

        requestAnimationFrame(scroll);
    }, []);

    return (
        <div className="Contact-container">
            <div className="contact-content">
                <h2 className="contact-headline">
                    Brain fog or just <span className="italic-text">overthinking?</span> 😃
                </h2>
                <p className="contact-description">
                    Peek at our masterpiece collection—so good, even our clients take credit for it… 
                    and honestly, we let them!
                </p>
            </div>
            <div className="Contact-scroll-container">
                <div className="Contact-grid" ref={scrollRef}>
                    {[...services, ...services].map((service, index) => (
                        <div className="Contact-grid-item" key={index}>
                            <img src={service.img} alt={service.caption} />
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contactwork;
