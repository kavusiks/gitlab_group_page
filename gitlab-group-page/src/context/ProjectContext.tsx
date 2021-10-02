import { createContext } from "react";

export type projectContextType = {
  id: number;
  setId: (id: number) => void;
  name: string;
  setName: (name: string) => void;
  description: string;
  setDescription: (description: string) => void;
};

export const ProjectContext = createContext<projectContextType>({
  id: 0,
  setId: (id) => console.warn("no id-setter"),
  name: "undefined",
  setName: (name) => console.warn("no name-setter"),
  description: "undefined",
  setDescription: (description) => console.warn("no description-setter"),
});
