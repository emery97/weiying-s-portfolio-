import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import powerBI from "../../Assets/../Assets/power-bi.svg";
import visualParadigm from "../../Assets/../Assets/visual-paradigm-icon.png";
import { SiCanva } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { SiJira } from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        style={{ textAlign: "center", margin: "20px" }}
      >
        <img
          src={powerBI}
          alt="Power BI"
          style={{
            width: "100%",
            maxWidth: "50px", 
            height: "auto",
          }}
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira  />
      </Col>
      <Col
        xs={4}
        md={2}
        className="tech-icons"
        style={{ textAlign: "center", margin: "20px" }}
      >
        <img
          src={visualParadigm}
          alt="Power BI"
          style={{
            width: "100%",
            maxWidth: "50px", 
            height: "auto",
          }}
        />
      </Col>
    </Row>
  );
}

export default Toolstack;
