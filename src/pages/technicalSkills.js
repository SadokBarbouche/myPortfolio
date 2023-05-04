import React from "react";
import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import { Col, Container, Row } from "react-bootstrap";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ProgressBar from "react-bootstrap/ProgressBar";
const TechnicalSkills = () => {
  return (
    <Container className="my-3 py-2">
      <ScrollAnimation animateIn="fadeIn" delay={250} animateOnce="true">
        <h1 className="display-1 fw-bolder  text-center">
          {" "}
          skills{" "}
          <span style={{ color: "red" }} className="display-4 fw-bolder">
            &lt;
            <Cursor className="py-5 px-5" cursorStyle="/" />
            &gt;
          </span>
        </h1>
      </ScrollAnimation>

      <br />

      <Container className="mx-3 my-2">
        <Row className="my-4">
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4 ">
              Machine Learning / Deep Learning
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                Currently learning
              </span>
            </p>
            <ProgressBar now={75} variant="danger" className="my-3" />
          </Col>
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4 ">
              HTML/CSS/Vanilla JS
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                80%
              </span>
            </p>
            <ProgressBar
              now={80}
              translate="yes"
              variant="danger"
              className="my-3"
            />
          </Col>
        </Row>
        <Row className="my-4">
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4">
              React JS
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                70%
              </span>
            </p>

            <ProgressBar now={70} variant="danger" className="my-3" />
          </Col>
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4 ">
              Bootstrap
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                90%
              </span>
            </p>
            <ProgressBar now={90} variant="danger" className="my-3" />
          </Col>
        </Row>
        <Row className="my-4 ">
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4 ">
              Java
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                55%
              </span>
            </p>
            <ProgressBar now={55} variant="danger" className="my-3" />
          </Col>
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4 ">
              C/C++
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                60%
              </span>
            </p>

            <ProgressBar
             now={60}
              aria-autocomplete={true}
              variant="danger"
              className="my-3"
            />
          </Col>
        </Row>
        <Row className="my-4">
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4 ">
              Python
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                70%
              </span>
            </p>
            <ProgressBar now={70} variant="danger" className="my-3" />
          </Col>
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4 ">
              TensorFlow
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                Currently learning
              </span>
            </p>
            <ProgressBar
             now={45}
              translate="yes"
              variant="danger"
              className="my-3"
            />
          </Col>
        </Row>
        <Row className="my-4 mb-5">
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4 ">
              DSA
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                65%
              </span>
            </p>
            <ProgressBar now={65} variant="danger" className="my-3" />
          </Col>
          <Col sm={12} md={6}>
            <p className="text-start fw-bolder fs-4 ">
              Data visualisation and analytics
              <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                Currently learning
              </span>
            </p>
            <ProgressBar
             now={70}
              translate="yes"
              variant="danger"
              className="my-3"
            />
          </Col>
        </Row>
      </Container>
      <p></p>
    </Container>
  );
};

export default TechnicalSkills;
