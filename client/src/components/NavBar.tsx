import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>HR-Department</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center gap-4">
            <Nav.Item className="">
              <Link className="text-decoration-none text-black" to="">
                Dashboard
              </Link>
            </Nav.Item>
            <Nav.Item className="">
              <Link
                className="text-decoration-none text-black"
                to="departments"
              >
                Departments
              </Link>
            </Nav.Item>
            <Nav.Item className="">
              <Link className="text-decoration-none text-black" to="staff">
                Staff
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
