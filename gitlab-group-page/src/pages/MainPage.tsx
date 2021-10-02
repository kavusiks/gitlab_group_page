import React, { FunctionComponent, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import { UseData } from "../context/SessionData";

export const MainPage: FunctionComponent = () => {
  const sessionData = UseData();

  useEffect(() => {
    sessionData.updateData();
  }, [sessionData]);

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
