import { createContext, useContext, FunctionComponent, useState } from "react";

import { fetchProject } from "../core/APIfunction";
import SessionData from "../models/sessionData";

export const useProviderValue = (): SessionData => {
  const [id, setId] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);

  const updateData = async () => {
    const groupId = localStorage.getItem("groupid");
    const groupToken = localStorage.getItem("grouptoken");

    if (groupId != null && groupToken != null) {
      setId(parseInt(groupId));
      const response = await fetchProject(parseInt(groupId), groupToken);
      setName(response.json().name);
      setDescription(response.json().description);
    }
  };

  return { id, name, description, updateData };
};

//The context object
export const DataContext = createContext<SessionData | undefined>(undefined);
DataContext.displayName = "DataContext";

//Used to provide a value for the context
export const DataProvider: FunctionComponent = (props: any) => {
  const data = useProviderValue();
  return <DataContext.Provider value={data}> </DataContext.Provider>;
};

//Used to access the context value
export const UseData = (): SessionData => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useSessionContext must be called within a provider!");
  }

  return context;
};
