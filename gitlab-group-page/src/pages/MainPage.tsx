import React, { FunctionComponent } from "react";

import { Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";

export const MainPage: FunctionComponent = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Row>
        <Col md={2}>
          <hr className="w-75 m-1 mt-3 mb-3" />
          {/* ha logg inn page her*/}
        </Col>
      </Row>
    </>
  );
};

export default MainPage;
