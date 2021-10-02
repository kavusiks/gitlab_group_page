import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInPage from "./pages/LogInPage";
import { useContext, useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import { ProjectContext } from "./context/ProjectContext";

function App() {
  //const dataSession = useContext(DataContext);
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>("g");
  const [description, setDescription] = useState<string>("");

  return (
    <div>
      <BrowserRouter>
        <ProjectContext.Provider
          value={{ id, setId, name, setName, description, setDescription }}
        >
          <Switch>
            <Route path="/login">
              <LogInPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </ProjectContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
