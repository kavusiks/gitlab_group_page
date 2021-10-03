import { FunctionComponent } from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "./index.css";

export interface InfoViewProps {
  id: number;
  name: string;
  description?: string;
}

export const InfoView: FunctionComponent<InfoViewProps> = ({
  id,
  name,
  description,
}: InfoViewProps) => {
  return (
    <div className="grid-container">
      <Container>
        <Jumbotron>
          <div className="grid-item1">
            <h1>
              {name === "" ? sessionStorage.getItem("ProjectName") : name}
            </h1>
          </div>
          <div className="grid-item2">
            <h4>#{id === 0 ? sessionStorage.getItem("ProjectId") : id}</h4>
          </div>
          <p>
            {description === ""
              ? sessionStorage.getItem("ProjectDescription")
              : description}
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};
