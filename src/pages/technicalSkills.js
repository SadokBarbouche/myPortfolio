import React from "react";
import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import { Col, Container, Row } from "react-bootstrap";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ProgressBar from "react-bootstrap/ProgressBar";
const TechnicalSkills = () => {
  const skillsData = [
    {
      name: "ReactJS",
      level: 60,
      color: "Black",
    },
    {
      name: "SomeOtherTech",
      level: 85,
      color: "red",
    },
  ];
  return (
    <ScrollAnimation animateIn="fadeIn" delay={350}>
      <Container className="mt-3 py-2">
        <h1 className="display-1 fw-bolder  text-center">
          {" "}
          skills{" "}
          <span style={{ color: "red" }} className="display-4 fw-bolder">
            &lt;
            <Cursor className="py-5 px-5" cursorStyle="/" />
            &gt;
          </span>
        </h1>
        <Container className="mx-3 my-2">
          <ScrollAnimation animateIn="fadeInLeft" delay={50}>
            <Row className="my-4">
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4">
                  React JS
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    50%
                  </span>
                </p>

                <ProgressBar now={50} variant="danger" className="my-3" />
              </Col>
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4 text-dark">
                  Bootstrap
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    90%
                  </span>
                </p>
                <ProgressBar now={90} variant="danger" className="my-3" />
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={50}>
            <Row className="my-4">
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4 text-dark">
                  Django
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    55%
                  </span>
                </p>
                <ProgressBar now={60} variant="danger" className="my-3" />
              </Col>
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4 text-dark">
                  HTML/CSS/Vanilla JS
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    80%
                  </span>
                </p>
                <ProgressBar
                  translate="yes"
                  now={80}
                  variant="danger"
                  className="my-3"
                />
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={50}>
            <Row className="my-4 ">
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4 text-dark">
                  Java
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    50%
                  </span>
                </p>
                <ProgressBar now={55} variant="danger" className="my-3" />
              </Col>
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4 text-dark">
                  C/C++
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    50%
                  </span>
                </p>

                <ProgressBar now={50} variant="danger" className="my-3" />
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight" delay={50}>
            <Row className="my-4">
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4 text-dark">
                  Python
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    70%
                  </span>
                </p>
                <ProgressBar now={70} variant="danger" className="my-3" />
              </Col>
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4 text-dark">
                  React Native
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    50%
                  </span>
                </p>
                <ProgressBar
                  translate="yes"
                  now={45}
                  variant="danger"
                  className="my-3"
                />
              </Col>
            </Row>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" delay={50}>
            <Row className="my-4">
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4 text-dark">
                  DSA
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    65%
                  </span>
                </p>
                <ProgressBar now={65} variant="danger" className="my-3" />
              </Col>
              <Col sm={12} md={6}>
                <p className="text-start fw-bolder fs-4 text-dark">
                  Figma
                  <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                    70%
                  </span>
                </p>
                <ProgressBar
                  translate="yes"
                  now={70}
                  variant="danger"
                  className="my-3"
                />
              </Col>
            </Row>
          </ScrollAnimation>
        </Container>
        <p>

        </p>
      </Container>
    </ScrollAnimation>
  );
};

export default TechnicalSkills;
