import { FunctionComponent, useEffect, useState } from "react";

import Issue from "../../models/issue";
import "./index.css";
import image from "../../assets/img/logo-extra-whitespace.png";
import { fetchIssues, fetchLabels } from "../../core/APIfunction";

/**
 * Props to pass IssueView component
 */
export interface IssueProps {
  issue: Issue;
}

/**
 *
 * @param param0 the issue to show
 * @returns a view of the issue
 */
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

/**
 *
 * @returns Component showing several issues
 */
export const IssueListView: FunctionComponent = () => {
  const [allIssues, setAllIssues] = useState<Issue[]>([]);

  const issues = sessionStorage.getItem("Issues");
  const updateIssuesWhenNewTab = async () => {
    const token = localStorage.getItem("Group Access Token");
    const id = localStorage.getItem("Group ID");
    if (token != null && id != null) {
      const tempLabelsData = await fetchLabels(parseInt(id), token);
      sessionStorage.setItem("Labels", tempLabelsData);
      const tempIssuesData = await fetchIssues(parseInt(id), token);
      sessionStorage.setItem("Issues", tempIssuesData);
    }
  };

  useEffect(() => {
    if (issues != null) {
      setAllIssues(JSON.parse(issues));
    }
    if (!instanceOfIssueList(allIssues)) updateIssuesWhenNewTab();

    //avoiding to put 'allIssues' in dependecies to avoid unnecessary
    //rerenders on first run when rab is not refreshed
    // eslint-disable-next-line
  }, [issues]);

  function instanceOfIssueList(object: any): object is IssueListViewProps {
    return "issues" in object;
  }
  return (
    <div className="grid-container issue-grid-container">
      {allIssues.map((item) => {
        return <IssueView issue={item} />;
      })}
      ;
    </div>
  );
};
