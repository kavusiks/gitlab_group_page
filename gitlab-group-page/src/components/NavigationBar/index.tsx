import { FunctionComponent, useState } from "react";

import {
  Button,
  ButtonGroup,
  Container,
  Nav,
  Navbar,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap/";
import { useHistory } from "react-router-dom";
import "./index.css";
/**
 * Global navbar
 */
const NavigationBar: FunctionComponent = () => {
  const history = useHistory();
  const handleChange = (val: string) => history.push(val);
  const [value, setValue] = useState("");

  function goToIssues() {
    history.push("/issues");
  }

  function goToLabels() {
    history.push("/labels");
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
