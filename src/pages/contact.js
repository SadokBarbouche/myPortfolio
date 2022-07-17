import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import MyPic from "../assets/my pic.jpeg";
const Contact = () => {
  const { text } = useTypewriter({
    words: ["contact me :)", "hire me <3"],
    loop: "0",
  });

  return (
    <div className="py-5" style={{}}>
      <h2 className="display-2 fw-bolder text-center mb-3">
        {text}
        <span style={{ color: "red" }}>
          <Cursor cursorStyle="_" />
        </span>
      </h2>
      <Container>
        <ScrollAnimation animateIn="fadeInLeft">
          <Row className="my-5">
            <Col md={4} sm={10} className="me-md-5">
              <Image
                src={MyPic}
                rounded
                style={{ border: "7px red solid",}}
                fluid
              />
            </Col>
            <Col className="my-5 text-md-start text-sm-center " md={7} sm={10}>
              <a
                href="https://www.facebook.com/sadok.barbouche.942"
                target={"blank"}
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <p className="fs-5 fw-bolder">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                      className="me-2"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </span>
                  Facebook
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/barbouche-sadok-03b162210/"
                target={"blank"}
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                <p className="fs-5 fw-bolder">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                      className="me-2"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                  </span>
                  Linkedin
                </p>
              </a>
              <a href="mailto:sadokchameseddine.barbouche@insat.ucar.tn" className="text-dark" style={{textDecoration:"none"}}>
              <p className="fs-5 fw-bolder">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-envelope"
                    viewBox="0 0 16 16"
                    className="me-2"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  E-mail
                </span>
              </p>
              </a>
              <Button className="fs-5 fw-bolder bg-danger mt-3" variant="dark">
                Download CV{" "}
                <span style={{ fontSize: "12px" }}>(Available ASAP)</span>
              </Button>
            </Col>
          </Row>
        </ScrollAnimation>
      </Container>
    </div>
  );
};
export default Contact;
