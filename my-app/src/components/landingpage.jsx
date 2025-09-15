import React from "react";
import MenuBar from './sections/menu-bar';
import './landingpage.css';
import SobreMim from "./sections/sobremim";
import Apresentação from "./sections/apresentação";
import Tecnologias from "./sections/tecnologias";

const LandingPage = () => {
    return (

            
            <section className="landing-page">
            <MenuBar />
            <SobreMim />
            <Apresentação />
            <Tecnologias />

        </section>
    );
};

export default LandingPage;