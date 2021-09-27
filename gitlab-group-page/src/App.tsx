import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
