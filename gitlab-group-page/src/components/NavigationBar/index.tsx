import { Component } from "react";

import { Container, Nav, Navbar } from "react-bootstrap/";

import "./index.css";
/**
 * Global navbar
 */
/**
 * Global navbar
 */
class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" className="logo">
            GitLab Group Page
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/labels">Labels</Nav.Link>
            <Nav.Link href="/issues">Issues</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
