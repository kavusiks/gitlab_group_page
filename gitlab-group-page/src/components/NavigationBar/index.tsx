import { FunctionComponent } from "react";

import { Button, ButtonGroup, Container, Navbar } from "react-bootstrap/";
import { useHistory } from "react-router-dom";
import "./index.css";
/**
 * Global navbar
 */
const NavigationBar: FunctionComponent = () => {
  const history = useHistory();

  function goToIssues() {
    history.push("/issues-page");
  }

  function goToLabels() {
    history.push("/labels-page");
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" className="logo">
          GitLab Group Page
        </Navbar.Brand>
        <ButtonGroup>
          <Button variant="primary" size="lg" onClick={goToIssues}></Button>
          <Button variant="primary" size="lg" onClick={goToLabels}></Button>
        </ButtonGroup>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
