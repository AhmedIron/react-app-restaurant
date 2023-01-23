import React from "react";
import Category from "./category";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Row } from "react-bootstrap";
import HelloUser from "./HelloUser";

const NavBar = () => {
  return (
    <Row className="font">
      <Navbar
        style={{
          border: "4px solid red",
        }}
        className="fixed-top"
        bg="light"
        expand="lg"
        variant="dark"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand className="logo">
              <img className="avatar" alt="..." src={`lll.jpg`}></img>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            style={{ backgroundColor: "red", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Category />
            <HelloUser />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
