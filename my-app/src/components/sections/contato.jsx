import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaWhatsapp, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/contato.css";

function Contato() {
  return (
    <Container className="contato-container py-5" id="contato" style={{ scrollMarginTop: "100px", paddingTop: "100px", paddingBottom: "80px" }}>
      <h2 className="contato-title mb-4">Informações de Contato</h2>
      <Row className="g-4 justify-content-center">
        <Col md={3} className="contato-item">
          <FaEnvelope className="contato-icon" />
          <h5>Email</h5>
          <p>andrewklayver87@gmail.com</p>
          <span>Responde em até 24h</span>
        </Col>
        <Col md={3} className="contato-item">
          <FaWhatsapp className="contato-icon" />
          <h5>WhatsApp</h5>
          <p>+55 (85) 99937-2739</p>
          <a href="https://wa.me/5585999372739">Chat direto comigo</a>
        </Col>
        <Col md={3} className="contato-item">
          <FaCalendarAlt className="contato-icon" />
          <h5>Disponibilidade</h5>
          <p>Segunda a Sexta</p>
          <span>9h às 18h (BRT)</span>
        </Col>
        <Col md={3} className="contato-item">
          <FaMapMarkerAlt className="contato-icon" />
          <h5>Localização</h5>
          <p>Fortaleza, Ceará</p>
          <span>Trabalho remoto</span>
        </Col>
      </Row>
    </Container>
  );
}

export default Contato;

