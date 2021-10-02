import React, { FunctionComponent, useContext } from "react";

import { Row, Col } from "react-bootstrap";
import { InfoView } from "../components/InfoView";
import NavigationBar from "../components/NavigationBar";
import { ProjectContext } from "../context/ProjectContext";

export const MainPage: FunctionComponent = () => {
  const { id, name, description } = useContext(ProjectContext);

  return (
    <>
      <NavigationBar></NavigationBar>
      <Row>
        <InfoView id={id} name={name} description={description} />
        <Col md={2}></Col>
      </Row>
    </>
  );
};

export default MainPage;
