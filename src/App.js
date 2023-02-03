import React from "react";
import Search from "./Search";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">React Weather Application</header>
      <div className="container">
        <Search defaultCity="Mysore" />
      </div>
      <footer className="Footer">
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/lakshmi-m-satyananda-3b726930"
          target="_blank"
          rel="noreferrer"
        >
          Lakshmi M Satyananda <i className="fa-brands fa-linkedin"></i>
        </a>
        , Open-Sourced on{" "}
        <a href="https://github.com/laksh-ms" target="_blank" rel="noreferrer">
          github <i className="fa-brands fa-github"></i>
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://fastidious-kashata-2137a2.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}
