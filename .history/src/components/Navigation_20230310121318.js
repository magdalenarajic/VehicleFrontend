import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">  
        <Nav variant="pills" >
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
      </Navbar>
    );
  }
}
