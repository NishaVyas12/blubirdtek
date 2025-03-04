import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import Elevate from "./Pages/Elevate";
import ContactIcon from "./Pages/ContactIcon";
import Launch from "./Pages/Launch"
function App() {
    return (
        <Router>
            <ContactIcon />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/work" element={<Work />} />
                <Route path="/elevate" element={<Elevate />} />
                <Route path="/launchpad" element={<Launch />} />
            </Routes>
        </Router>
    );
}

export default App;
