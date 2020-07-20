import React from "react";

import "./App.css";
import Job from "./Job";
function App() {
  return (
    <div>
      <header>The job board</header>
      {/* <div className="container">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div> */}
      <Job />
    </div>
  );
}

export default App;
