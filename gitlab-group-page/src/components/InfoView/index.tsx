import { FunctionComponent } from "react";
import { Container, Jumbotron } from "react-bootstrap";

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
            <h1>{name === "" ? localStorage.getItem("ProjectName") : name}</h1>
          </div>
          <div className="grid-item2">
            <h4>#{id === 0 ? localStorage.getItem("ProjectId") : id}</h4>
          </div>
          <p>
            {description === ""
              ? localStorage.getItem("ProjectDescription")
              : description}
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};
