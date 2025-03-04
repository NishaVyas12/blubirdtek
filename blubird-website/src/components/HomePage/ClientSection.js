import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "../../assets/css/HomePage/ClientSection.css";

import client1 from "../../assets/images/client/client1.png";
import client2 from "../../assets/images/client/client2.png";
import client3 from "../../assets/images/client/client3.png";
import client4 from "../../assets/images/client/client4.png";
import client5 from "../../assets/images/client/client5.png";
import client6 from "../../assets/images/client/client6.png";
import client7 from "../../assets/images/client/client7.png";
import client8 from "../../assets/images/client/client8.png";
import client9 from "../../assets/images/client/client9.png";
import client10 from "../../assets/images/client/client10.png";
import client11 from "../../assets/images/client/client11.png";
import client12 from "../../assets/images/client/client11.svg";

const ClientSection = () => {
    const imageSources = [
        client1, client2, client3, client4, client5, client6, 
        client7, client8, client9, client10, client11, client12
    ];

    const words = ["NOT", "THAT", "WE'RE", "BRAGGING"];
    const [counts, setCounts] = useState(words.map(() => ""));
    const [countingDone, setCountingDone] = useState(false);
    const [clients, setClients] = useState(imageSources); 
    const { ref, inView } = useInView({ triggerOnce: false });

    useEffect(() => {
        if (!inView) return;

        setCountingDone(false);
        setCounts(words.map(() => "0"));

        let counter = 0;
        const interval = setInterval(() => {
            if (counter < 400) {
                setCounts(words.map(word => {
                    const length = word.length;
                    return String(Math.floor(Math.random() * Math.pow(10, length)).toString().padStart(length, "0"));
                }));
                counter += 20;
            } else {
                clearInterval(interval);
                setCountingDone(true);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [inView]);

    useEffect(() => {
        const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);
        const updateClients = () => {
            setClients(shuffleArray(imageSources));
        };
        const interval = setInterval(updateClients, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="clients-section" ref={ref}>
            <h1 className="bragging-title">
                {words.map((word, index) => (
                    <span key={index} className="count-word">
                        {countingDone ? word : counts[index]}
                    </span>
                ))}
            </h1>
            <h2>We Have Worked With</h2>
            <div className="clients-grid">
                {clients.map((src, index) => (
                    <div className="client" key={index}>
                        <img src={src} alt={`Client ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientSection;
