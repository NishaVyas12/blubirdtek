import React from "react";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import BISElevateHeroSection from "../components/BISElevate/BISElevateHeroSection";
import BISElevateService from "../components/BISElevate/BISElevateService";
import BISElevatePortfolio from "../components/BISElevate/BISElevatePortfolio";
const Elevate = () => {
    return (
        <>
            <Header />
            <BISElevateHeroSection />
            <BISElevateService />
            <BISElevatePortfolio />
            <Footer />
        </>
    );
};

export default Elevate;
