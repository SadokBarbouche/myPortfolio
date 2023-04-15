import React from "react";
import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import { Col, Container, Row } from "react-bootstrap";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import ProgressBar from "react-bootstrap/ProgressBar";

const TechnicalSkills = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" delay={250} animateOnce="true">
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
          <Row className="my-4">
            <Col sm={12} md={6}>
              <p className="text-start fw-bolder fs-4 text-light">
                Machine Learning / Deep Learning
                <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                  Currently learning
                </span>
              </p>
              <ProgressBar now={55} variant="danger" className="my-3" />
            </Col>
            <Col sm={12} md={6}>
              <p className="text-start fw-bolder fs-4 text-light">
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
              <p className="text-start fw-bolder fs-4 text-light">
                Bootstrap
                <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                  90%
                </span>
              </p>
              <ProgressBar
                disabled
                now={90}
                variant="danger"
                className="my-3"
              />
            </Col>
          </Row>
          <Row className="my-4 ">
            <Col sm={12} md={6}>
              <p className="text-start fw-bolder fs-4 text-light">
                Java
                <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                  55%
                </span>
              </p>
              <ProgressBar now={55} variant="danger" className="my-3" />
            </Col>
            <Col sm={12} md={6}>
              <p className="text-start fw-bolder fs-4 text-light">
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
              <p className="text-start fw-bolder fs-4 text-light">
                Python
                <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                  70%
                </span>
              </p>
              <ProgressBar now={70} variant="danger" className="my-3" />
            </Col>
            <Col sm={12} md={6}>
              <p className="text-start fw-bolder fs-4 text-light">
                TensorFlow
                <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                  Currently learning
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
          <Row className="my-4 mb-5">
            <Col sm={12} md={6}>
              <p className="text-start fw-bolder fs-4 text-light">
                DSA
                <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                  65%
                </span>
              </p>
              <ProgressBar now={65} variant="danger" className="my-3" />
            </Col>
            <Col sm={12} md={6}>
              <p className="text-start fw-bolder fs-4 text-light">
                Data visualisation and analytics
                <span style={{ float: "right" }} className="my-2 fs-6 pe-1">
                  Currently learning
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
        </Container>
        <p></p>
      </Container>
    </ScrollAnimation>
  );
};

export default TechnicalSkills;
