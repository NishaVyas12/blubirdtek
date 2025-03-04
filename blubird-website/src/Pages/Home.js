import React from "react";
import ProjectSection from "../components/HomePage/ProjectSection";
import HeroSection from "../components/HomePage/HeroSection";
import ServiceSection from "../components/HomePage/ServiceSection";
import ClientSection from "../components/HomePage/ClientSection"; 
import Testinomial from "../components/HomePage/Testinomial"; 
import NewsSection from "../components/HomePage/NewsSection";
import AwardsSection from "../components/HomePage/AwardsSection";
import Footer from "../components/HomePage/Footer";
import ScrollprojectSection from "../components/HomePage/ScrollprojectSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <ServiceSection /> 
            <ProjectSection />
            <ScrollprojectSection />
            <ClientSection />
            <Testinomial/>
            <NewsSection />
            <AwardsSection />
            <Footer />
        </>
    );
};

export default Home;
