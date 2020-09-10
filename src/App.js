import React from "react";
import "./App.css";
import Title from "./Title";
import DadJoke from "./DadJoke";
import Bikes from "./Bikes";

function App() {
  console.log("Halla");
  return (
    <div className="App">
      <Title />
      <DadJoke />
      <Bikes />
    </div>
  );
}

export default App;
