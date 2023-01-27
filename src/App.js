import React from "react";
import Search from "./Search";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">React Weather Application</header>
      <div className="container">
        <Search />
      </div>
      <footer className="Footer">
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/lakshmi-m-satyananda-3b726930"
          target="_blank"
          rel="noreferrer"
        >
          Lakshmi M Satyananda <i className="fa-brands fa-linkedin"></i>
        </a>{" "}
        and{" "}
        <a href="https://github.com/laksh-ms" target="_blank" rel="noreferrer">
          Open-Sourced on github <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </div>
  );
}
