import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/landingpage';
import About from './pages/about';
import TechnicalSkills from './pages/technicalSkills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <LandingPage/>
      <About/>
      <TechnicalSkills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
