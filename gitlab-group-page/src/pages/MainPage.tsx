import React, { FunctionComponent, useContext, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import { ProjectContext } from "../context/ProjectContext";

//import { UseDataContext, DataProvider } from "../context/SessionData";

export const MainPage: FunctionComponent = () => {
  const { id, name, description, setDescription } = useContext(ProjectContext);
  console.log("Nåå");
  console.log(name);
  console.log(id);
  console.log(description);

  return (
    <>
      <NavigationBar></NavigationBar>
      <Row>
        <Col md={2}></Col>
        <h1>{id} </h1>
        <h1>{name} </h1>
        <h1>{description} </h1>
      </Row>
    </>
  );
};

export default MainPage;
