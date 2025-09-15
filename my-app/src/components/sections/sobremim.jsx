import React from "react";
import './Styles/sobremim.css';

const SobreMim = () => (
    <section className="sobremim-container" style={{ marginTop: "50px" }}>
        <h2 className ="sobremim-title" >
            Desenvolvedor FrontEnd
        </h2>
        <h3 className="sobremim-subtitle">
            Transformando ideias em soluções digitais
        </h3>
        <p className="sobremim-description">
           Especializado em React, Node.js e tecnologias modernas. Transformo ideias em soluções digitais impactantes para freelancers e empresas.
        </p>
        <div className="btn-container">
            <button className="btn">
                Ver Projetos
            </button>
            <button className="btn">
                Contratar
            </button>
        </div>
    </section>
);

export default SobreMim;