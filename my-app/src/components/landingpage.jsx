import React from "react";
import MenuBar from './sections/menu-bar';
import './landingpage.css';
import SobreMim from "./sections/sobremim";
import Apresentação from "./sections/apresentação";
import Tecnologias from "./sections/tecnologias";
import Projetos from "./sections/projetos";
import Footer from "./sections/footer";
import Contato from "./sections/contato";

const LandingPage = () => {
    return (

            
            <section className="landing-page">
            <MenuBar />
            <SobreMim />
            <Apresentação />
            <Tecnologias />
            <Projetos /> 
            <Contato />
            <Footer />

        </section>
    );
};

export default LandingPage;