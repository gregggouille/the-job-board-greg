import React from "react";

import "./App.css";
import Jobs from "./Jobs";
import Job from "./Job";
function App() {
  return (
    <div>
      <header>The job board</header>

      <Jobs />
      <footer>
        Made with React @ <a href="https://www.lereacteur.io/">le Reacteur</a>{" "}
        by Greg
      </footer>
    </div>
  );
}

export default App;
