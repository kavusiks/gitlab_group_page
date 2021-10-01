import React, { FunctionComponent } from "react";

import { Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";

export const MainPage: FunctionComponent = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Row>
        <Col md={2}></Col>
      </Row>
    </>
  );
};

export default MainPage;
