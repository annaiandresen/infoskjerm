import React from "react";
import "./App.css";
import Title from "./Title";
import DadJoke from "./DadJoke";
import Bikes from "./Bikes";
//import Reddit from "./Reddit";
import Clock from "./Clock";
import Bus from "./Bus";
//import News from "./News";
import Weather from "./Weather";
import Bring from "./Bring";

function App() {
  return (
    <div className="App">
          <Title />
          <DadJoke />
          <Bikes />
        <Clock />
        <Bus />
        <Weather />
        <Bring />
    </div>
  );
}

export default App;
