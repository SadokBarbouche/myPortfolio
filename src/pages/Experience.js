import ScrollAnimation from "@stromsky/react-animate-on-scroll";
import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Experiences = () => {
  const { text } = useTypewriter({
    words: "++",
    loop: 0,
  });
  const screenWidthDiff = Boolean(window.screen.availWidth - 950 > 0);

  return (
    <div style={{ backgroundColor: "" }}>
      <Container className="text-light pb-5">
        <p className="display-2 fw-bolder text-danger py-1">
          Experience{" "}
          <span className="fs-1 text-light">
            &lt;xp
            <Cursor cursorStyle="/" />
            &gt;
          </span>
        </p>
        <div>
          <VerticalTimeline lineColor="red" animate={screenWidthDiff}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#000",
                color: "white",
                border: "5px white solid",
              }}
              className="vertical-timeline-element--work"
              date="02/2023 - present"
              iconStyle={{ background: "red", color: "red" }}
              contentArrowStyle={{
                marginRight: "1px",
                borderRight: "15px solid  white",
              }}
            >
              <h3
                className="vertical-timeline-element-title fw-bolder fs-1 text-start"
                style={{ lineHeight: "1.1" }}
              >
                Topic Extraction for Video using Machine Learning
              </h3>
              <h4
                className="py-2 text-start vertical-timeline-element-subtitle fs-6"
                style={{ lineHeight: "1.5", borderTop: "1px white solid" }}
              >
                Data preprocessing, conducting exploratory data analysis, and
                developing a classification model using natural language
                processing techniques.
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work "
              contentStyle={{
                background: "black",
                color: "white",
                border: "5px white solid",
              }}
              contentArrowStyle={{
                marginRight: "1px",
                borderRight: "15px solid  white",
              }}
              date="04/2022 - present"
              iconStyle={{ background: "black", color: "#fff" }}
            >
              <h3
                className="text-start vertical-timeline-element-title fw-bolder fs-1 "
                style={{ borderBottom: "1px white solid", lineHeight: "1.5" }}
              >
                Cookiini Platform
              </h3>
              <h4
                className="vertical-timeline-element-subtitle fs-6 text-start"
                style={{ lineHeight: "1.8" }}
              >
                Production team member working on the front end of the platform
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "#000",
                color: "white",
                border: "5px white solid",
              }}
              className="vertical-timeline-element--work"
              date=<span style={{}}>2022 - present</span>
              iconStyle={{ background: "black", color: "#fff" }}
              contentArrowStyle={{
                marginRight: "1px",
                borderRight: "15px solid  white",
              }}
            >
              <h3
                className="vertical-timeline-element-title fw-bolder fs-1 text-start"
                style={{ borderBottom: "1px white solid", lineHeight: "1.5" }}
              >
                My Portfolio
              </h3>
              <h4
                className="text-start vertical-timeline-element-subtitle fs-6"
                style={{ lineHeight: "1.3" }}
              >
                Working on my own portfolio website (may work on a blog later on
                sharing my thoughts and ideas).
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "black",
                color: "white",
                border: "5px white solid",
              }}
              contentArrowStyle={{
                marginRight: "1px",
                borderRight: "15px solid  white",
              }}
              className="vertical-timeline-element--work"
              date="05/2022"
              iconStyle={{ background: "black", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title fw-bolder fs-1 text-start"
                style={{ borderBottom: "1px white solid", lineHeight: "1.5" }}
              >
                INJAZ Tunisia
              </h3>
              <h4
                className="text-start vertical-timeline-element-subtitle fs-6"
                style={{ lineHeight: "1.5" }}
              >
                My team and I managed to win the{" "}
                <span className="fw-bolder">JURY PRIZE</span> and a place in{" "}
                <span className="fw-bolder">NATIONAL COMPETETION</span>.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "black",
                color: "white",
                border: "5px white solid",
              }}
              contentArrowStyle={{
                marginRight: "1px",
                borderRight: "15px solid  white",
              }}
              className="vertical-timeline-element--work"
              date="05/2022"
              iconStyle={{ background: "black", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title fw-bolder fs-1 text-start"
                style={{ borderBottom: "1px white solid", lineHeight: "1.5" }}
              >
                Winter Cup
              </h3>
              <h4
                className="text-start vertical-timeline-element-subtitle fs-6"
                style={{ lineHeight: "1.5" }}
              >
                It was not our best performance since my team and I managed to
                solve only one task and got many T.L.Es and W.As ,but it was
                overall a very fruitful experience.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "black",
                color: "white",
                border: "5px white solid",
              }}
              contentArrowStyle={{
                marginRight: "1px",
                borderRight: "15px solid  white",
              }}
              className="vertical-timeline-element--work"
              date="11/2021"
              iconStyle={{ background: "black", color: "#fff" }}
            >
              <h3
                className="vertical-timeline-element-title fw-bolder fs-3 text-start"
                style={{ borderBottom: "1px white solid", lineHeight: "1.5" }}
              >
                P.B.R<span className="fs-6"> (v0)</span>
              </h3>
              <h4
                className="text-start vertical-timeline-element-subtitle fs-6"
                style={{ lineHeight: "1.5" }}
              >
                It was my first experience when it comes to CP . My team and I
                managed to win a first blood against the best competetive
                programmers in Tunisia. Unfortunately,due to some technical
                issues , the platform could not handle the huge number of
                participants and fell down.
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "white", color: "red" }}
            />
          </VerticalTimeline>
        </div>
      </Container>
    </div>
  );
};
export default Experiences;
