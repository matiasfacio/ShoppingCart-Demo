import React from "react";
import "./styles/App.css";
import "./script.js";
import Cat from "./catLogo.svg";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={Cat} alt="logo-cat" className="logoCat" />
        </div>
        <div className="headerTitles">
          <div id="title">
            <h1>Welcome to your Kitten Shopping Cart</h1>
          </div>
          <div id="subtitle">
            <h2>- hey Ma, buy me a cat! -</h2>
          </div>
        </div>
      </header>

      <NavBar />
    </div>
  );
}

export default App;
