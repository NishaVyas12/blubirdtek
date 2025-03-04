import React from "react";
import LaunchHero from "../components/Launchpad/LaunchHero";
import LaunchWork from "../components/Launchpad/LaunchWork";
import ContactFooter from "../components/ContactPage/ContactFooter";
const Home = () => {
    return (
        <>
            <LaunchHero />
            <LaunchWork />
            <ContactFooter />
        </>
    );
};

export default Home;
