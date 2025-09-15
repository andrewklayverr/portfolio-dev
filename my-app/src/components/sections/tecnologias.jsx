import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import cards from "../arrays/array";
import "./Styles/tecnologias.css";

function Tecnologias() {
  return (
    <div
      className="tecnologias-container"
      style={{ marginTop: "50px", color: "#61DAFB" }}
    >
      <h1
        className="tecnologias-title"
        style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}
      >
        Tecnologias
      </h1>
      <h2
        className="tecnologias-subtitle"
        style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
      >
        Ferramentas que Domínio
      </h2>
      <Row xs={1} md={2} className="g-4" style={{ padding: "5px" }}>
        {cards.map((card, idx) => (
          <Col xs={12} md={3} key={idx}>
            <Card className="card-custom h-100">
              <Card.Img variant="top" src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <div className="card-tags">
                  {card.tags.map((tag, i) => (
                    <span key={i} className="card-tag">{tag}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
       <h3 style={{ fontSize: "1rem", marginTop: "2rem",
        color: "#929292ff"
       }}>Interessado em trabalhar comigo?</h3>
       <button
         className="btn-tecnologias"
         style={{
           marginTop: "20px",
           padding: "10px 20px",
           fontSize: "1rem", 
           backgroundColor: "#61DAFB",
           color: "#fff",
           border: "none",
           borderRadius: "5px",
           cursor: "pointer",
         }}
       >
         Vamos Conversar
       </button>
     </div>
    </div>
    
  );
}

export default Tecnologias;
