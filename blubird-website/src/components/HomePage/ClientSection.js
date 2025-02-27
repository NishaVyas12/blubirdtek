import React, { useEffect, useState } from "react";
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
import "../../assets/css/HomePage/ClientSection.css";
const ClientSection = () => {
    const imageSources = [
        client1, client2, client3, client4, client5, client6, 
        client7, client8, client9, client10, client11, client12
    ];

    const [clients, setClients] = useState(imageSources);

    useEffect(() => {
        const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

        const updateClients = () => {
            setClients(shuffleArray(imageSources));
        };

        const interval = setInterval(updateClients, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="clients-section">
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
