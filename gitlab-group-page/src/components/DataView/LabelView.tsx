import { FunctionComponent, useEffect, useState } from "react";
import { fetchLabels } from "../../core/APIfunction";
import Label from "../../models/label";
import "./index.css"

export interface LabelProps {
  label: Label;
}


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
  } as const

  return (
        <div className="grid-item" style={style.griditemstyle}>
          <h1>{label.name}</h1>
          <h3 style={style.h3}>Color: </h3> 
          <div className="label-color-box" style={style.labelcolor}>
            <h3 >{label.color}</h3>
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

export const LabelListView: FunctionComponent = () => {
  const [allLabels, setAllLabels] = useState<Label[]>([]);
  //const { id } = useContext(ProjectContext);
  const id = localStorage.getItem("Group ID");
  const token = localStorage.getItem("Group Access Token");

  useEffect(() => {
    if (id != null && token != null) {
      fetchLabels(parseInt(id), token).then((items) => setAllLabels(items));
    }
  }, [id, token]);

  return (
    <div className="grid-container">
      {allLabels.map((item) => {
        return <LabelView label={item} />;
      })}
    </div>
  );
};
