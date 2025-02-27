import React from "react";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import WorkHeroSection from "../components/WorkPage/WorkHeroSection.js";
import WorkAbout from "../components/WorkPage/WorkAbout.js";
import WorkPortfolio from "../components/WorkPage/WorkPortfolio.js";
import WorkPortfolio1 from "../components/WorkPage/WorkPortfolio1.js";
import WorkPortfolio2 from "../components/WorkPage/WorkPortfolio2.js";
import WorkPortfolio3 from "../components/WorkPage/WorkPortfolio3.js";
import WorkPortfolio4 from "../components/WorkPage/WorkPortfolio4.js";
import MoreProject from "../components/WorkPage/MoreProject.js";  

const Work = () => {
    return (
        <>
            <Header />
            <WorkHeroSection />
            <WorkAbout />
            <WorkPortfolio />
            <WorkPortfolio1 />
            <WorkPortfolio2 />
            <WorkPortfolio3 />
            <WorkPortfolio4 />
            <MoreProject />  
            <Footer />
        </>
    );
};

export default Work;
