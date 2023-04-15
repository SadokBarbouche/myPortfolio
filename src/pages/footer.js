import React from "react";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <div
      className="fs-md-3 fs-sm-5 px-3 "
      style={{
        height: "38px",
        position: "sticky",
        bottom: "0",
        borderTop: "1px solid black",
        boxShadow: "1px",
        backgroundColor: "white",
      }}
    >
      <Container>
        <p className="py-3">
          Made by the one and only @
          <span className="fw-bolder" style={{ textDecoration: "underline" }}>
            Sadok Barbouche
          </span>
        </p>
      </Container>
    </div>
  );
};
export default Footer;
