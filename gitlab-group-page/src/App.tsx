import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";

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
