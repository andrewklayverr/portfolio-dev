import './Styles/apresentação.css'; 
import React from "react";
import foto from '../../assets/foto.jpg';



export default function Apresentacao() {
  return (
    <section className="apresentação-container" id="apresentação">
          <div className='apresentação-topo'>
         <h3 className="apresentação-title">SOBRE MIM</h3>
          <h2 className="apresentação-subtitle">Paixão por Código</h2>
        </div>

      <div className="apresentação-content">
        <div className="apresentação-image">
          <img src={foto} alt="Sobre Mim" />
        </div>
      
        <div className="apresentação-info">
          <p className="apresentação-text">
            Sou um desenvolvedor apaixonado por criar soluções digitais que fazem
            a diferença. Com foco em{" "}
            <span className="highlight">Frontend</span> e experiência sólida em{" "}
            <span className="highlight">FullStack</span>, transformo ideias em
            realidade digital.
          </p>

          <p className="apresentação-text">
            Especializado em{" "}
            <span className="highlight">React, JavaScript e Node.js</span>,
            desenvolvo aplicações modernas, responsivas e de alta performance.
            Minha experiência com{" "}
            <span className="highlight">APIs REST, MySQL e GitHub</span> me
            permite entregar projetos completos.
          </p>

          <p className="apresentação-text">
            Como <span className="highlight">freelancer</span>, estou sempre em
            busca de novos desafios e oportunidades para criar experiências
            digitais únicas que superem expectativas.
          </p>

          <div className="apresentação-stats">
            <div>
              <h3>3+</h3>
              <p>Anos Exp.</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
