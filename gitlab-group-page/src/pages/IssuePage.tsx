import React, { FunctionComponent, useContext } from "react";

import { Row } from "react-bootstrap";
import { IssueListView } from "../components/DataView/IssuesView";
import { InfoView } from "../components/InfoView";
import NavigationBar from "../components/NavigationBar";
import { ProjectContext } from "../context/ProjectContext";

export const IssuePage: FunctionComponent = () => {
  const { id, name, description } = useContext(ProjectContext);
  console.log(localStorage.getItem("id"));
  console.log(localStorage.getItem("token"));
  console.log("sjekka det nå");

  return (
    <div className="page-wrapper">
      <NavigationBar></NavigationBar>
      <Row>
        <InfoView id={id} name={name} description={description} />
        <IssueListView />
      </Row>
    </div>
  );
};

export default IssuePage;
