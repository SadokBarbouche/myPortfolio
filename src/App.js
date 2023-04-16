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
function App() {
  return (
    <div
      className="App wavy-background"
      style={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      

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
