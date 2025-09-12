import React from "react";
import MenuBar from './sections/menu-bar';
import './landingpage.css';
import SobreMim from "./sections/sobremim";
import Apresentação from "./sections/apresentação";

const LandingPage = () => {
    return (

            
            <section className="landing-page">
            <MenuBar />
            <SobreMim />
            <Apresentação />

        </section>
    );
};

export default LandingPage;