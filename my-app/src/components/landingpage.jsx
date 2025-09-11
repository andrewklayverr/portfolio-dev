import React from "react";
import MenuBar from './sections/menu-bar';
import './landingpage.css';
import SobreMim from "./sections/sobremim";

const LandingPage = () => {
    return (

            
            <section className="landing-page">
            <MenuBar />
            <SobreMim />

        </section>
    );
};

export default LandingPage;