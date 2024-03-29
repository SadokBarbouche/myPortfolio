import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Cursor } from "react-simple-typewriter";
import PortfolioProject from "../assets/PortfolioProject.png";
import CookiiniProject from "../assets/CookiiniProject.png";
import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import inprogress from "../assets/inprogress.jpg";
const ProjectItem = (props) => (
  <Card
    style={{ backgroundColor: "#181818", marginBottom: "30px" }}
    className="px-3 py-3"
  >
    <Card.Body>
      <Card.Text
        className="text-start text-light fw-bolder fs-1 mb-1"
        style={{ lineHeight: "0.8" }}
      >
        {props.name}
        <span className="fs-6">{props.usedStack}</span>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={props.bg} />
    <div style={{ display: "flex", justifyContent: "end" }}>
      <a
        target="blank"
        href={props.ghrep}
        className="text-end text-light mt-2"
        style={{
          border: "0px",
          marginBottom: "-5px",
          textDecoration: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          class="bi bi-github"
          viewBox="0 0 16 16"
          className="me-1 pb-1"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
      <a
        target="blank"
        href={props.fbprf}
        className="text-end text-light mt-2"
        style={{
          border: "0px",
          marginBottom: "-5px",
          textDecoration: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="white"
          class="bi bi-facebook"
          viewBox="0 0 16 16"
          className="me-1 pb-1"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
        </svg>
      </a>
      <a
        href={props.linkedin}
        target="blank"
        className="text-end text-light mt-2"
        style={{
          border: "0px",
          marginBottom: "-5px",
          textDecoration: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-linkedin"
          viewBox="0 0 16 16"
          className="me-1 pb-1"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </a>
    </div>
  </Card>
);
const Projects = () => {
  return (
    <div style={{ border: "1px " }}>
      <Container className="my-2 py-4 mb-4 ">
        <h1 className="display-1 fw-bolder  text-center mb-4 ">
          Projects
          <span style={{ color: "red" }}>
            <Cursor className="py-5 px-5 " cursorStyle="|" />
          </span>
        </h1>
        <ScrollAnimation animateIn="fadeIn" animateOnce="true">
          <Container className="py-3">
            <Row>
              <Col sm={12} lg={6} className="my-3">
                <Card
                  style={{ backgroundColor: "#181818" }}
                  className="px-3 py-3"
                >
                  <Card.Body>
                    <Card.Text
                      className="text-start text-light fw-bolder fs-1 mb-1"
                      style={{ lineHeight: "0.8" }}
                    >
                      Portfolio{" "}
                      <span className="fs-6">
                        using React JS , React Bootstrap and CSS.
                      </span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img variant="bottom" src={PortfolioProject} />
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <a
                      target="blank"
                      href="blank"
                      className="text-end text-light mt-2"
                      style={{
                        border: "0px",
                        marginBottom: "-5px",
                        textDecoration: "none",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                        className="me-1 pb-1"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                    <a
                      target="blank"
                      href="https://www.facebook.com/sadok.barbouche.942/"
                      className="text-end text-light mt-2"
                      style={{
                        border: "0px",
                        marginBottom: "-5px",
                        textDecoration: "none",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                        className="me-1 pb-1"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/barbouche-sadok-03b162210/"
                      target="blank"
                      className="text-end text-light mt-2"
                      style={{
                        border: "0px",
                        marginBottom: "-5px",
                        textDecoration: "none",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                        className="me-1 pb-1"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
                </Card>
              </Col>
              <Col sm={12} lg={6} className="my-3">
                <Card
                  style={{ backgroundColor: "#181818" }}
                  className="px-3 py-3"
                >
                  <Card.Body>
                    <Card.Text
                      className="text-start text-light fw-bolder fs-1 mb-1"
                      style={{ lineHeight: "0.8" }}
                    >
                      Cookiini Platform{" "}
                      <span className="fs-6">using React JS, Nest JS.</span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img variant="bottom" src={CookiiniProject} />
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <a
                      href="https://github.com/BahaBoualii/COOKIINI-front-end"
                      target="blank"
                      className="text-end text-light mt-2"
                      style={{
                        border: "0px",
                        marginBottom: "-5px",
                        textDecoration: "none",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                        className="me-1 pb-1"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=100082969970735"
                      target="blank"
                      className="text-end text-light mt-2"
                      style={{
                        border: "0px",
                        marginBottom: "-5px",
                        textDecoration: "none",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                        className="me-1 pb-1"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/cookiini/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BQRz0kUpkRkawTGJSLbdWgw%3D%3D"
                      target="blank"
                      className="text-end text-light mt-2"
                      style={{
                        border: "0px",
                        marginBottom: "-5px",
                        textDecoration: "none",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-linkedin"
                        viewBox="0 0 16 16"
                        className="me-1 pb-1"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row
              style={{
                justifyContent: "center",
              }}
            >
              <Col sm={12} lg={6} className="my-3">
                <Card
                  style={{ backgroundColor: "#181818" }}
                  className="px-3 py-3"
                >
                  <Card.Body>
                    <Card.Text
                      className="text-start text-light fw-bolder fs-1 mb-1"
                      style={{ lineHeight: "0.8" }}
                    >
                      Topic Extraction for Video using Machine Learning{" "}
                      <span className="fs-6">
                        using TF, NLTK, OpenCV and ML techniques.
                      </span>
                    </Card.Text>
                  </Card.Body>
                  <Card.Img
                    variant="bottom"
                    src={inprogress}
                    className="d-none d-lg-block"
                    height={350}
                    style={{
                      width: "65%",
                      display: "block",
                      margin: "auto",
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <a
                      href="https://i.imgflip.com/4k23hw.jpg"
                      target="blank"
                      className="text-end text-light mt-2"
                      style={{
                        border: "0px",
                        marginBottom: "-5px",
                        textDecoration: "none",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        class="bi bi-github"
                        viewBox="0 0 16 16"
                        className="me-1 pb-1"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/sadok.barbouche.942/"
                      target="blank"
                      className="text-end text-light mt-2"
                      style={{
                        border: "0px",
                        marginBottom: "-5px",
                        textDecoration: "none",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        class="bi bi-facebook"
                        viewBox="0 0 16 16"
                        className="me-1 pb-1"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                  </div>
                </Card>
              </Col>
              <Col
                sm={12}
                lg={6}
                className="my-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ProjectItem
                  name={"Assitancia "}
                  usedStack={"Free CV and Cover Letters builder (Unfinished) "}
                  fbprf={"https://www.facebook.com/sadok.barbouche.942/"}
                  ghrep={"https://github.com/SadokBarbouche/assistancia"}
                  bg={" "}
                />
                <ProjectItem
                  name={"ACM INSAT (Front-End) "}
                  usedStack={
                    "Using mainly ReactJS and React Bootsrap (Unfinished)"
                  }
                  fbprf={"https://www.facebook.com/sadok.barbouche.942/"}
                  ghrep={"https://github.com/SadokBarbouche/acmwebsite"}
                  bg={" "}
                />
                <Card
                  className="px-3 py-3 mt-1"
                  style={{ backgroundColor: "#181818" }}
                >
                  <Card.Body>
                    <Card.Text
                      className="text-start text-light fw-bolder fs-1 mb-1"
                      style={{ lineHeight: "1.0" }}
                    >
                      Join me in the quest for knowledge and growth - let's
                      intern together!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col></Col>
            </Row>
            {/* <ProjectItem name={} usedStack={} ghrep={} fbprf={} linkedin={} bg={} /> */}
          </Container>
        </ScrollAnimation>
      </Container>
    </div>
  );
};

export default Projects;
