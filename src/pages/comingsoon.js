import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../styles/comingsoon.css";
import ComingSoonPic from "../assets/comingsoon.svg";
const ComingSoon = () => {
  return (
    <div
      // id="comingSoon"
      className="my-5"
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Container className="my-5 py-md-4">
        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
          <Row>
            <Col md={6} sm={12}>
              <h3 className="text-start fs-4 fw-bold text-danger text-decoration-underline">
                Coming Soon ?
              </h3>
              <h1 className="text-start fw-bolder display-1">Assitancya</h1>
              <p className="text-start mt-md-0">
                It is a free platform aiming to make job application process
                easier and smoother. The job applicant simply fills a well
                guided form with his infos and the platform takes care of the
                design saving him time and effort. What makes it unique is that
                it offers the same paid service other platforms offer for{" "}
                <strong className="fs-4" style={{ color: "red" }}>
                  free
                </strong>
                . No prior designing skills are needed.{" "}
                <strong className="fs-5 text-decoration-underline">
                  The whole process won't take longer than 10 minutes
                </strong>
                .
              </p>
            </Col>
            <Col className="d-none d-sm-block">
              <ScrollAnimation animateIn="slideLeft" animateOnce="true">
                <Image src={ComingSoonPic} fluid />
              </ScrollAnimation>
            </Col>
          </Row>
        </ScrollAnimation>
      </Container>
    </div>
  );
};
export default ComingSoon;
