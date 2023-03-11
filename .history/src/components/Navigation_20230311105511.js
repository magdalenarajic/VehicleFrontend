import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">VehicleApp </Navbar.Brand>
          <Nav variant="pills" className="me-auto">
            <Nav.Link className="d-inline p-2 text-white " href="/">
              Home
            </Nav.Link>
            <Nav.Link className="d-inline p-2 text-white" href="/makes">
              Vehicle Makes
            </Nav.Link>
            <Nav.Link className="d-inline p-2 text-white" href="/models">
              Vehicle Models
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
