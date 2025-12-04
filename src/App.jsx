import React from "react";

import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./Hero";
import PortfolioNavbar from "./Portfolionavbar";
import "./App.css";
import Skills from "./skills";
import Footer from "./footer";

function App() {
  return (
    <>
    <PortfolioNavbar />
   <Hero />
      <About />
     
       <Skills />
        <Projects />
      <Contact />
      <Footer /> 
     
    </>
  );
}

export default App;
