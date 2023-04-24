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
import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import DarkModeToggle from "react-dark-mode-toggle";
import { loadFull } from "tsparticles";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <div
      className="App"
      style={{
        color: darkMode ? "white" : "black",
        backgroundColor: darkMode ? "black" : "white",
        fontFamily: "Share Tech ",
        position: "relative",
        zIndex: "1",
      }}
    >
      <div className="text-end me-5 pt-1">
        <DarkModeToggle
          style={{
            backgroundImage: "none",
          }}
          onChange={setDarkMode}
          checked={darkMode}
          size={80}
          speed={2}
          style={{}}
        />
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: darkMode ? "#ffffff" : "#000000",
            },
            links: {
              color: darkMode ? "#ffffff" : "#000000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          zIndex: "-1",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      />

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
