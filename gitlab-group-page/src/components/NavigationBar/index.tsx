import React from "react";
import { FunctionComponent } from "react";

//import { Person } from "react-bootstrap-icons";
import { Nav, Navbar } from "react-bootstrap/";
//import { Button } from "react-bootstrap";
//import "./index.css";
//import { useSessionContext } from "../../context/Session";
//import AuthenticationService from "../../core/auth";
//import { useHistory, useLocation } from "react-router";

/**
 * Global navbar
 */
const NavigationBar: FunctionComponent = () => {
  /* The button "Adminpanel" will take the super user to the general admin site.
  "Adminpanel" will not show if the user is not a super user*/

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/" className="logo">
        GitLab Group Page
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
    </Navbar>
  );
};

export default NavigationBar;
