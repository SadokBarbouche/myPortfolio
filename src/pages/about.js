import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Cursor } from "react-simple-typewriter";
import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import ScrollToTop from "react-scroll-to-top";

const About = () => {
  const coneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-cone-striped"
      viewBox="0 0 16 16"
    >
      <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z" />
    </svg>
  );
  const arrowTop = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      class="bi bi-arrow-up-circle"
      viewBox="0 0 16 16"
      style={{ border: "0", opacity: "0.1" }}
    >
      <path
        fill-rule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
      />
    </svg>
  );
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce="true" >
      <Container className="text-start my-5 pb-5">
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

        <h1 className="display-1 fw-bolder text-center mb-5" id="whoami">
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
            style={{ border: "2px white solid", borderRadius: "5px" }}
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
                I am a 21 y.o student from El Kef. I got my{" "}
                <span className="fw-bolder">
                  Mathematics Baccalaureate with Honors
                </span>{" "}
                and have recently finished my
                <span className="fw-bolder"> preparatory cycle</span>.
              </p>
            </div>
          </Col>

          <Col
            className="text-start mx-3 my-1 shadow-lg"
            sm={7}
            md={7}
            xs={7}
            lg={3}
            style={{ border: "2px red solid", borderRadius: "5px" }}
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
            style={{ border: "2px white solid", borderRadius: "5px" }}
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
                  href="https://leetcode.com/SadokBarbouche/"
                  className="text-light"
                  style={{ textDecoration: "none" }}
                >
                  <li>
                    Competetive programming{" "}
                    <span className="ms-1 text-danger">
                      {coneIcon}
                    </span>
                  </li>
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
