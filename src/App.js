import React from "react";
//import "./App.css";
import DadJoke from "./DadJoke";
import Bikes from "./Bikes";
//import Reddit from "./Reddit";
import Clock from "./Clock";
import Bus from "./Bus";
//import News from "./News";
//import Weather from "./Weather";
//import Bring from "./Bring";

function App() {
  return (
    <div className="App">
        <Clock />
      <div className="gridContent">
        <div className="bikesAndJokes">
          <Bikes />
          <DadJoke />
        </div>
        <Bus isTowardsCenter={true}/>
        <Bus isTowardsCenter={false}/>
      </div>
    </div>
  );
}

export default App;
