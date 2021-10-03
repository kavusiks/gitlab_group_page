import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";

import { Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { LabelListView } from "../components/DataView/LabelView";
import { InfoView } from "../components/InfoView";
import NavigationBar from "../components/NavigationBar";
import { ProjectContext } from "../context/ProjectContext";
import { fetchProject } from "../core/APIfunction";
import "./index.css";

export const LabelPage: FunctionComponent = () => {
  const { id, name, description } = useContext(ProjectContext);

  const history = useHistory();
  const [validAPI, setValidAPI] = useState(true);

  useEffect(() => {
    switchRoutes();
    /**
     * Saving data from project context to sessionStorage, in case user
     * refreshes the page which will reset data in context. It will only be saved if the
     * values are not default values.
     */
    if (id !== 0) localStorage.setItem("ProjectId", id.toString());

    if (name !== "") localStorage.setItem("ProjectName", name);
    if (description !== "")
      localStorage.setItem("ProjectDescription", description);
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
    <div className="page-wrapper">
      <NavigationBar></NavigationBar>
      <Row>
        <InfoView id={id} name={name} description={description} />
        <LabelListView />
      </Row>
    </div>
  );
};

export default LabelPage;
