import { Component, FunctionComponent, useEffect, useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap/";
import { fetchIssues, fetchLabels } from "../../core/APIfunction";
import Issue from "../../models/issue";
import NavigationBar from "../NavigationBar";

export interface IssueProps {
  issue: Issue;
}

export const IssueView: FunctionComponent<IssueProps> = ({
  issue,
}: IssueProps) => {
  return (
    <div>
      <Container>
        <div className="grid-item1">
          <h1>{issue.title}</h1>
        </div>
        <h3>
          Number:
          {" " + issue.iid}
        </h3>
      </Container>
    </div>
  );
};

export interface IssueListViewProps {
  /**
   * The issues to display in the list view
   */
  issues: Issue[];
}

export const IssueListView: FunctionComponent = ({}) => {
  const [allIssues, setAllIssues] = useState<Issue[]>([]);
  //const { id } = useContext(ProjectContext);
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (id != null && token != null) {
      fetchIssues(parseInt(id), token).then((items) => setAllIssues(items));
      //console.log(fetchLabels(parseInt(id), token));
      //console.log(fetchProject(parseInt(id), token));
    }
  }, [id, token]);

  return (
    <div>
      {allIssues.map((item) => {
        return <IssueView issue={item} />;
      })}
    </div>
  );
};
