import { useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Content from "./Pages/Content";
import Porfolio from "./Pages/Porfolio";
import Skills from "./Pages/Skills";
import About from "./Pages/About";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <div className="App">
        <NavBar />
        <Content />
        <About />
        <Skills />
        <Porfolio />
      </div> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/content" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/porfolio" element={<Porfolio />} />
          <Route path="skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
