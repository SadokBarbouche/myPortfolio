import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/landingpage";
import About from "./pages/about";
import TechnicalSkills from "./pages/technicalSkills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import { Routes, Route, Link } from "react-router-dom";
import Experiences from "./pages/Experience";
import "react-creative-cursor/dist/styles.css";
import "./styles/style.css";
import Particles from "react-particles";
import { useState } from "react";
import { Button } from "react-bootstrap";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div
      className="App"
      style={{
        color: darkMode ? "white" : "black",
        backgroundColor: darkMode ? "black" : "white",
        fontFamily: 'Share Tech ',

      }}
    >
      <div className="text-end me-5 pt-1">
        <DarkModeToggle style={{
          backgroundImage:'none',
      }} onChange={setDarkMode} checked={darkMode} size={80} speed={2} style={{
          
        }} />
      </div>
      <LandingPage />
      <About />
      <TechnicalSkills />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
