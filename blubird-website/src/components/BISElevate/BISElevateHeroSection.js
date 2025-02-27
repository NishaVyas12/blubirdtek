import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/BISElevate/BISElevateHeroSection.css";

const BISElevateHeroSection = () => {
    const navigate = useNavigate();
    useEffect(() => {
        
        if (!document.querySelector(`script[src="/assets/js/Elevate.js"]`)) {
            const script = document.createElement("script");
            script.src = "/assets/js/Elevate.js";
            script.async = true;
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script); 
            };
        }
    }, []);

    return (
        <>
           
            <section className="BISElevate_hero">
            <canvas id="elevate"></canvas> 
                <h1>
                    BIS Elevate: Amplify Your Brand's Impact
                    {/* <br /><div className="roller">
                        <span>Create</span>
                        <span>Build</span>
                        <span>Shape</span>
                        <span>Create</span>
                        <span>Build</span>
                        <span>Shape</span>
                        
                    </div> */}
                </h1>
                <p className="BISElevate_hero-subtitle">Be unforgettable.</p>
            </section>
        </>
    );
};

export default BISElevateHeroSection;