import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Skills from "./components/Skills";
import Porfolio from "./components/Porfolio";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="App"></div>
      </Router>
      {/* <div className="App">
        <NavBar />
        <Content />
        <About />
        <Skills />
        <Porfolio />
      </div> */}
    </>
  );
}

export default App;
