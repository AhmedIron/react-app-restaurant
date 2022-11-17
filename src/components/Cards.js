import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/ListGroup";

const Cards = () => {
  return (
    <Row>
      <Col sm="12" className="mt-3">
        <Card className="d-flex flex-row" style={{backgroundColor: 'white'}}>
          <div className="cardImage">
            <Card.Img variant="top" src="zzz.jpeg" />
          </div>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Cards;
