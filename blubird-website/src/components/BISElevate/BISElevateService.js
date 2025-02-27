import React, { useEffect, useRef } from "react";
import "../../assets/css/BISElevate/BISElevateService.css";
import img1 from "../../assets/images/BISElevate/img1.png";
import img2 from "../../assets/images/BISElevate/img2.png";
import img3 from "../../assets/images/BISElevate/img3.png";
import img4 from "../../assets/images/BISElevate/img4.png";

const services = [
    { img: img4, caption: "Product strategy and development support" },
    { img: img3, caption: "Payment gateway integration" },
    { img: img2, caption: "Marketplace development" },
    { img: img1, caption: "E-commerce platform development" },
];

const BISElevateService = () => {
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
        <div className="elevate-container">
            <div className="elevate-headline">
                Craft powerful brand stories and create eye-catching content that grabs attention and <br /> builds lasting connections.
            </div>
            <div className="elevate-scroll-container">
                <div className="elevate-grid" ref={scrollRef}>
                    {[...services, ...services].map((service, index) => (
                        <div className="elevate-grid-item" key={index}>
                            <img src={service.img} alt={service.caption} />
                            <div className="elevate-caption">{service.caption}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BISElevateService;
