import { createContext, useContext, useState, FunctionComponent } from "react";

//The context object
export const DataContext = createContext({
  data: null,
});

//Used to provide a value for the context
export const DataProvider = () => {
  const [data, setData] = useState(null);
  return <DataContext.Provider value={{ data: data }}> </DataContext.Provider>;
};

//Used to access the context value
export const DataUser = () => {
  const context = useContext(DataContext);

  return <h2>{context.data}</h2>;
};
