import { FunctionComponent } from "react";

import { Container, Nav, Navbar } from "react-bootstrap/";
import "./index.css";
/**
 * Global navbar
 */
const NavigationBar: FunctionComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="logo">
          GitLab Group Page
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Valg2</Nav.Link>
          <Nav.Link href="/">Valg2</Nav.Link>
          <Nav.Link href="/">Valg3</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
