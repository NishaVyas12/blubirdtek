import React from "react";
import Header from "../components/HomePage/Header";
import ContactHeroSection from "../components/ContactPage/ContactHeroSection";
import Team from "../components/ContactPage/Team";
import ContactForm from "../components/ContactPage/ContactForm";
import GoogleMap from "../components/ContactPage/GoogleMap";
import ContactFooter from "../components/ContactPage/ContactFooter";
import Contactwork from "../components/ContactPage/Contactwork";
const Contact = () => {
    return (
        <>
            <Header />
            <ContactHeroSection />
            <Team />
            <ContactForm />
            <Contactwork />
            {/* <GoogleMap /> */}
            <ContactFooter />
        </>
    );
};

export default Contact;
