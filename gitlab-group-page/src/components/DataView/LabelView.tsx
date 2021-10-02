import { FunctionComponent, useEffect, useState } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import { fetchLabels } from "../../core/APIfunction";

export interface LabelProps {
  name: string;
  setName: (name: string) => void;
  color: string;
  setColor: (color: string) => void;
}
/*

export const LabelView: FunctionComponent<LabelProps> = ({
  name,
  setName,
  color,
  setColor,
}) => {
  
  const [allLabels, setAllLabels] = useState<LabelProps[]>([]);
  useEffect(() => {
    fetchLabels(
      localStorage.getItem("groupId"),
      localStorage.getItem("grouptoken")
    );
  });
  */

/*
  return (
    <div className="grid-container">
      <Container>
        <Jumbotron>
          <div className="grid-item1">
            <h1>{name}</h1>
          </div>
          <div className="grid-item2">
            <h4>#{id}</h4>
          </div>
          <p>{description}</p>
        </Jumbotron>
      </Container>
    </div>
  );
};*/
