import "./Styles/projetos.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import cardsProjetos from "../arrays/arrayprojetos";
import "bootstrap-icons/font/bootstrap-icons.css";

function Projetos() {
  return (
    <div className="projetos-container py-5" id="projetos">
      <h1 className="projetos-title mb-3">
  Trabalhos Realizados
</h1>
      <h5 className="projetos-subtitle mb-5">Uma seleção dos meus projetos mais recentes, mostrando versatilidade e qualidade técnica</h5>

      <Row xs={1} md={2} className="g-4">
        {cardsProjetos.map((proj, idx) => (
          <Col key={idx}>
            <Card className="projetos-card h-100">
              <div className="projetos-label-wrapper">
                <span
                  className={`projetos-label ${
                    proj.tipo ? proj.tipo.toLowerCase().replace(/\s+/g, "") : ""
                  }`}
                >
                  {proj.tipo}
                </span>
              </div>

              <div className="projetos-image-container">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="projetos-image"
                />
                <div className="projetos-overlay">
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-box-arrow-up-right"></i>
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>

              <Card.Body>
                <Card.Title>{proj.title}</Card.Title>
                <Card.Text>{proj.text}</Card.Text>
                <div className="d-flex flex-wrap gap-2 mt-3">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="projetos-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Projetos;
