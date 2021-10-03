import { FunctionComponent, useEffect, useState } from "react";

import Issue from "../../models/issue";
import "./index.css";
import image from "../../assets/img/logo-extra-whitespace.png";

export interface IssueProps {
  issue: Issue;
}

export const IssueView: FunctionComponent<IssueProps> = ({
  issue,
}: IssueProps) => {
  return (
    <div className="grid-item issue-grid-item">
      <div className="grid-item-header">
        <img
          src={image}
          alt="Gitlab logo"
          width="30%"
          height="30%"
          className="issues-image"
        />
      </div>
      <div className="grid-item-title">
        <h1>{issue.title}</h1>
      </div>
      <div className="grid-item-content">
        <h3>
          Number:
          {" #" + issue.iid}
        </h3>
      </div>
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

  const issues = sessionStorage.getItem("Issues");

  useEffect(() => {
    if (issues != null) {
      setAllIssues(JSON.parse(issues));
    }
  }, [issues]);

  return (
    <div className="grid-container issue-grid-container">
      {allIssues.map((item) => {
        return <IssueView issue={item} />;
      })}
    </div>
  );
};
