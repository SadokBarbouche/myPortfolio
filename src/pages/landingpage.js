import React from "react";
import { Button, Container } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import About from "./about";
import { Cursor as AnimatedCursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import "../styles/style.css";

export default function LandingPage() {
  const { text } = useTypewriter({
    words: [
      " an ICT engineering Student @INSAT",
      "  a Machine Learning enthusiast",
      " a Deep Learning enthusiast",
      " open to work",
      " a minimalist",
    ],
    loop: "0",
  });
  const arrowTop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="invertColor"
      class="bi bi-arrow-up-circle"
      viewBox="0 0 16 16"
      style={{ border: "0" }}
    >
      <path
        fill-rule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
      />
    </svg>
  );
  const screenHeight = window.screen.availHeight + "px";
  const handleClick = () => {
    const div = document.getElementById("whoami");
    div.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{
        alignItems: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div className="">
        <Container className="text-start">
          <h1
            className="display-1 fw-bolder"
            style={{ marginTop: "-150px" }}
          >
            Sadok Barbouche
            <h1>
              I am
              <span style={{ color: "red", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                {text}
                <Cursor cursorStyle="_" />
              </span>
            </h1>
          </h1>
        </Container>
      </div>
      <div class="down-arrow" onClick={handleClick}></div>

      <ScrollToTop
        smooth
        component={arrowTop}
        style={{
          borderRadius: "25px",
          opacity: "0.5",
          border: "1px white solid",
          right: "20px",
          bottom: "10px",
        }}
      />
    </div>
  );
}
