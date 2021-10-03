import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInPage from "./pages/LogInPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/main-page">
            <MainPage />
          </Route>
          <Route path="/">
            <LogInPage />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
