import React from "react";
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">React Weather App</header>
      <div class="container">
        <div class="card weather">
          <Search />
        </div>
      </div>
      <footer className="Footer">
        <a href="https://github.com/laksh-ms" target="_blank" rel="noreferrer">
          <i class="fa-brands fa-github"></i>Open-Source code
        </a>
        , by
        <a
          href="https://www.linkedin.com/in/lakshmi-m-satyananda-3b726930"
          target="_blank"
          rel="noreferrer"
        >
          Lakshmi M Satyananda <i class="fa-brands fa-linkedin"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
