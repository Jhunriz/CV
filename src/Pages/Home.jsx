import React from "react";
import NavBar from "../components/NavBar";
import Content from "./Content";
import About from "./About";
import Skills from "./Skills";
import Porfolio from "./Porfolio";

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <Content />
      <About />
      <Skills />
      <Porfolio />
    </div>
  );
}
