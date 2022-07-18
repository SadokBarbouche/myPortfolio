import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Cursor } from "react-simple-typewriter";
import ScrollAnimation from "@stromsky/react-animate-on-scroll";

const About = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Container className="text-start my-5 pb-5">
        <h1 className="display-1 fw-bolder text-center mb-3">
          {" "}
          whoami
          <span style={{ color: "red" }}>
            <Cursor cursorStyle="_" />
          </span>{" "}
        </h1>
        <Row
          className="text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Col
            className="text-start mx-3 my-1 shadow-lg"
            style={{ border: "2px black solid" }}
            sm={7}
            md={7}
            xs={7}
            lg={3}
          >
            <div>
              <p className="fw-bold my-3 fs-3 " style={{ color: "red" }}>
                Biography :
              </p>
              <p className="fs-5">
                I am a 21 y.o student from El Kef .I got my{" "}
                <span className="fw-bolder">
                  Mathematics Baccalaureate with Honors
                </span>{" "}
                and have recently finished my
                <span className="fw-bolder"> preparatory cycle</span>.
              </p>
            </div>
          </Col>

          <Col
            className="text-start mx-3 my-2 shadow-lg"
            sm={7}
            md={7}
            xs={7}
            lg={3}
            style={{ border: "2px black solid" }}
          >
            <div>
              <p className="fw-bold my-3 fs-3" style={{ color: "red" }}>
                Education :
              </p>
              <p className="fs-5">
                I am a first year ICT engineering student at the{" "}
                <span className="fw-bolder">
                  National Institut of Applied Sciences and Technologies
                </span>
                .
              </p>
            </div>
          </Col>

          <Col
            style={{ border: "2px black solid" }}
            className="mx-3 my-2 shadow-lg"
            sm={7}
            md={7}
            xs={7}
            lg={3}
          >
            <div className="text-start">
              <p className="fw-bold my-3 fs-3" style={{ color: "red" }}>
                Hobbies & Interests:
              </p>
              <ul className="fw-bolder">
                <li>Gaming</li>
                <li>Web Development</li>
                <li>Coding</li>
                <a
                  target="blank"
                  href="https://codeforces.com/profile/SadokBarbouche"
                  className="text-dark"
                  style={{ textDecoration: "none" }}
                >
                  <li>Competetive programming</li>
                </a>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </ScrollAnimation>
  );
};
export default About;
