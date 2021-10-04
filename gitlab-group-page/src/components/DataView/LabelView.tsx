import { FunctionComponent, useEffect, useState } from "react";
import { fetchIssues, fetchLabels } from "../../core/APIfunction";

import Label from "../../models/label";
import "./index.css";

/**
 * Props to pass LabelView component
 */
export interface LabelProps {
  label: Label;
}

/**
 *
 * @param param0 the label to show
 * @returns a view of the label
 */
export const LabelView: FunctionComponent<LabelProps> = ({
  label,
}: LabelProps) => {
  let labelcolor = label.color;

  const style = {
    h3: {
      fontStyle: "italic",
    },
    labelcolor: {
      backgroundColor: labelcolor,
    },
    griditemstyle: {
      borderColor: label.color,
    },
  } as const;

  return (
    <div className="grid-item" style={style.griditemstyle}>
      <h1>{label.name}</h1>
      <h3 style={style.h3}>Color: </h3>
      <div className="label-color-box" style={style.labelcolor}>
        <h3>{label.color}</h3>
      </div>
    </div>
  );
};

/**
 * Props for the LabeListView
 */
export interface LabelListViewProps {
  /**
   * The labels to display in the list view
   */
  labels: Label[];
}

/**
 *
 * @returns Component showing several labels
 */
export const LabelListView: FunctionComponent = () => {
  const [allLabels, setAllLabels] = useState<Label[]>([]);

  const labels = sessionStorage.getItem("Labels");
  /**
   * Method used to update session storage.
   * Session storage needs to be updated when the
   * app is opened in a new session.
   */
  const updateLabelsWhenNewTab = async () => {
    const token = localStorage.getItem("Group Access Token");
    const id = localStorage.getItem("Group ID");
    if (token != null && id != null) {
      const tempLabelsData = await fetchLabels(parseInt(id), token);
      sessionStorage.setItem("Labels", tempLabelsData);
      const tempIssuesData = await fetchIssues(parseInt(id), token);
      sessionStorage.setItem("Issues", tempIssuesData);
    }
  };

  /**
   * Use data from session storage it it exists.
   * Call on updateLabelsWhenNewTab() if no labels
   * exists in session storage. This occur when app is opened
   * in a new seesion for the first time.
   */
  useEffect(() => {
    if (labels != null) {
      setAllLabels(JSON.parse(labels));
    } else if (!instanceOfLabelList(allLabels)) {
      updateLabelsWhenNewTab();
    }
    //avoiding to put 'allIssues' in dependecies to avoid unnecessary
    //rerenders on first run when rab is not refreshed
    // eslint-disable-next-line
  }, [labels]);

  function instanceOfLabelList(object: any): object is LabelListViewProps {
    return "labels" in object;
  }

  return (
    <div className="grid-container">
      {allLabels.map((item) => {
        return <LabelView label={item} />;
      })}
      ;
    </div>
  );
};
