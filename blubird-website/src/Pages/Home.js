import React from "react";
import Header from "../components/HomePage/Header";
import ProjectSection from "../components/HomePage/ProjectSection";
import HeroSection from "../components/HomePage/HeroSection";
import BirdSection from "../components/HomePage/BirdSection";
import ServiceSection from "../components/HomePage/ServiceSection";
import ClientSection from "../components/HomePage/ClientSection"; 
import Testinomial from "../components/HomePage/Testinomial"; 
import NewsSection from "../components/HomePage/NewsSection";
import StarHero from "../components/HomePage/StarHero";
import Footer from "../components/HomePage/Footer";
import ScrollprojectSection from "../components/HomePage/ScrollprojectSection";

const Home = () => {
    return (
        <>
            {/* <Header /> */}
            <HeroSection />
            <BirdSection /> 
            <ServiceSection /> 
            <ProjectSection />
            <ScrollprojectSection />
            <ClientSection />
            <Testinomial/>
            <NewsSection />
            <StarHero />
            <Footer />
        </>
    );
};

export default Home;
