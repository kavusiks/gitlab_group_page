import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/LogIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h1>Welcome to your gitlab group page!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login/>
      </header>
    </div>
  );
}

export default App;