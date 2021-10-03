import { FunctionComponent, useEffect, useState } from "react";

import { Container } from "react-bootstrap/";
import { fetchIssues } from "../../core/APIfunction";
import Issue from "../../models/issue";

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

export const IssueListView: FunctionComponent = () => {
  const [allIssues, setAllIssues] = useState<Issue[]>([]);

  const id = localStorage.getItem("Group ID");
  const token = localStorage.getItem("Group Access Token");

  useEffect(() => {
    if (id != null && token != null) {
      fetchIssues(parseInt(id), token).then((items) => setAllIssues(items));
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
