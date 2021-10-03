import { FunctionComponent, useEffect, useState } from "react";

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

  useEffect(() => {
    if (labels != null) {
      setAllLabels(JSON.parse(labels));
    }
  }, [labels]);

  return (
    <div className="grid-container">
      {allLabels.map((item) => {
        return <LabelView label={item} />;
      })}
    </div>
  );
};
