import { FunctionComponent, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { fetchLabels } from "../../core/APIfunction";
import Label from "../../models/label";

export interface LabelProps {
  label: Label;
}

export const LabelView: FunctionComponent<LabelProps> = ({
  label,
}: LabelProps) => {
  return (
    <div>
      <Container>
        <div className="grid-item1">
          <h1>{label.name}</h1>
        </div>
        <h3>
          Color:
          {" " + label.color}
        </h3>
      </Container>
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
    <div>
      {allLabels.map((item) => {
        return <LabelView label={item} />;
      })}
    </div>
  );
};
