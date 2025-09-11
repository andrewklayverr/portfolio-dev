import React from "react";
import './Styles/sobremim.css';

const SobreMim = () => (
    <section id="sobre-mim" style={{ padding: "4rem 0", textAlign: "center" }}>
        <h2 style={{ color: "#61dafb", fontSize: "4rem", marginBottom: "1rem" }}>
            Desenvolvedor FrontEnd
        </h2>
        <h3 style={{ color: "#61dafb", fontSize: "1.5rem", marginBottom: "1rem" }}>
            Transformando ideias em soluções digitais
        </h3>
        <p style={{ color: "#ccc", maxWidth: 700, margin: "2rem", fontSize: "1.2rem" }}>
           Especializado em React, Node.js e tecnologias modernas. Transformo ideias em soluções digitais impactantes para freelancers e empresas.
        </p>
        <button className="btn">
            Ver Projetos
        </button>
        <button className="btn">
            Ver Projetos
        </button>
    </section>
);

export default SobreMim;