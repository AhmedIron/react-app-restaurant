import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Row,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Row className="font">
      <Navbar className="fixed-top" bg="light" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand className="logo" href="/"><img className="avatar" alt="..." src={`xxx.png`}></img></Navbar.Brand>
          <Navbar.Toggle style={{ backgroundColor: "rgb(127 188 224)" }} aria-controls="navbarScroll" />
          <Navbar.Collapse   id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                style={{ zIndex: "5" }}
              />
              <button className="search" variant="outline-success">GO</button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
