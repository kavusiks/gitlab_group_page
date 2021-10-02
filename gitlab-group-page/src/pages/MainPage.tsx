import React, { FunctionComponent, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import NavigationBar from "../components/NavigationBar";
import { fetchProject } from "../core/APIfunction";

export const MainPage: FunctionComponent = () => {
  
  const history = useHistory();
  
  useEffect(() => {
    if ((localStorage.getItem("Group ID")===null) && (localStorage.getItem("Group Access Token")===null) ) {
      history.push('/');
    } else {
      checkAPI();
      history.push('/main-page');
    }
  });

  async function checkAPI() {
    const temp = await fetchProject(
      JSON.parse(localStorage.getItem('Group ID') || '{}'),
      JSON.parse(localStorage.getItem('Group Access Token') || '{}')
    );

    if (temp.message === "401 Unauthorized") {
      history.push('/');
    }
    else if (temp.message === "404 Project Not Found") {
      history.push('/');
    }

  }

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
