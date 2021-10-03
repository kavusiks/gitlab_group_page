import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";

import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { IssueListView } from "../components/DataView/IssuesView";
import { InfoView } from "../components/InfoView";
import NavigationBar from "../components/NavigationBar";
import { ProjectContext } from "../context/ProjectContext";
import { fetchProject } from "../core/APIfunction";

export const IssuePage: FunctionComponent = () => {
  const { id, name, description } = useContext(ProjectContext);
  const history = useHistory();
  const [validAPI, setValidAPI] = useState(true);

  useEffect(() => {
    switchRoutes();
  });

  const switchRoutes = () => {
    isValidAPI();
    if (
      (localStorage.getItem("Group ID") === null &&
        localStorage.getItem("Group Access Token") === null) ||
      validAPI === false
    ) {
      localStorage.removeItem("Group ID");
      localStorage.removeItem("Group Access Token");
      history.push("/login");
    } else {
      history.push("/labels");
    }
  };

  async function isValidAPI() {
    var id = localStorage.getItem("Group ID") || "{}";
    var token = localStorage.getItem("Group Access Token") || "{}";
    const temp = await fetchProject(parseInt(id), token);
    let length = Object.keys(temp).length;

    if (temp.message === "401 Unauthorized") {
      setValidAPI(false);
    } else if (temp.message === "404 Project Not Found") {
      setValidAPI(false);
    } else if (length > 1) {
      console.log("setting true");
      setValidAPI(true);
    } else {
      console.log("Something is wrong");
    }
  }

  return (
    <>
      <NavigationBar></NavigationBar>
      <Row>
        <InfoView id={id} name={name} description={description} />
        <Col md={2}></Col>
        <IssueListView />
      </Row>
    </>
  );
};

export default IssuePage;
