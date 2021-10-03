import React, { FunctionComponent, useContext } from "react";

import { Row, Col } from "react-bootstrap";
import { LabelListView } from "../components/DataView/LabelView";
import { InfoView } from "../components/InfoView";
import NavigationBar from "../components/NavigationBar";
import { ProjectContext } from "../context/ProjectContext";

export const MainPage: FunctionComponent = () => {
  const { id, name, description } = useContext(ProjectContext);
  console.log(localStorage.getItem("id"));
  console.log(localStorage.getItem("token"));
  console.log("sjekka det nå");

  return (
    <>
      <NavigationBar></NavigationBar>
      <Row>
        <InfoView id={id} name={name} description={description} />
        <Col md={2}></Col>
        <LabelListView />
      </Row>
    </>
  );
};

export default MainPage;
