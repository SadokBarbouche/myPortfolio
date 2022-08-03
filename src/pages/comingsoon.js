import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../styles/comingsoon.css";
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
        <Row className="py-4 my-md-5">
          <Col md={4} sm={8} className=" py-md-0 py-sm-4">
            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
              <h1
                className="text-start display-2 display-sm-6 text-danger fw-bolder mt-md-0 mt-sm-3 pb-4"
                style={{
                  borderBottom: "5px solid black",
                  borderRight: "5px solid black",
                  lineHeight: "1.3",
                }}
              >
                Currently <span className=" fw-bolder">working on</span>
              </h1>
            </ScrollAnimation>
          </Col>
          <Col md={7} sm={8} className="ms-md-5 py-md-0 mt-3">
            <ScrollAnimation animateIn="slideInDown" animateOnce="true">
              <p className="text-start mt-md-0 " style={{ zIndex: "55" }}>
                {/* <Image
                fluid
                src={comingSoonPic}
                className="img-fluid d-none d-sm-block"
                style={{ float: "right", width: "50%",marginRight:"-186px",marginTop:"-158px" }}
              /> */}
                <span
                  className="fs-4 fw-bolder"
                  style={{ fontFamily: "serif" }}
                >
                  M
                </span>
                y next project is on an early stage . It is a platform meant to
                make Tunisian job applications experience faster and better .
                The alpha version is going to be free but the next enhanced
                version is going to be paid .{" "}
                <span
                  className="fs-3 fw-bolder"
                  style={{
                    fontFamily: "serif",
                    fontStyle: "italic",
                    color: "red",
                    lineHeight: "2",
                    borderBottom: "2.5px solid red",
                  }}
                >
                  However
                </span>
                , the price of the subscription is nothing compared to the
                advantages of the platform . If you want to join me on this
                journey , feel free to{" "}
                <span className="fw-bolder fs-4">contact me</span>.{" "}
              </p>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ComingSoon;
