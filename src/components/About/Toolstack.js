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
  const toolDescription = {
    SiVisualstudiocode: "Visual Studio Code",
    FaGithub: "Github",
    SiPostman: "Postman",
    SiCanva: "Canva",
    FaFigma: "Figma",
    SiAndroidstudio: "Andriod Studio",
    SiJira: "Jira",
  };
  
  const iconMap = {
    powerBI: <powerBI />,
    SiVisualstudiocode: <SiVisualstudiocode />,
    FaGithub: <FaGithub />,
    SiPostman: <SiPostman />,
    FaFigma: <FaFigma />,
    SiCanva: <SiCanva />,
    SiAndroidstudio: <SiAndroidstudio />,
    SiJira: <SiJira />,
    visualParadigm: <visualParadigm />,
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
    <Col
      xs={4}
      md={2}
      className="tech-icons"
      style={{ textAlign: "center", margin: "20px", height: "120px" }}
    >
      <div className="tech-icon-container">
        <img
          src={powerBI}
          alt="Power BI"
          style={{
            width: "4rem",  // Match the size to other icons using rem
            height: "4rem", // Consistent height
            objectFit: "contain", // Maintain aspect ratio
          }}
        />
        <div className="tech-description">Power BI</div> {/* Tooltip text */}
      </div>
    </Col>
    <Col
      xs={4}
      md={2}
      className="tech-icons"
      style={{ textAlign: "center", margin: "20px", height: "120px" }}
    >
      <div className="tech-icon-container">
      <img
              src={visualParadigm}
              alt="Power BI"
              style={{
                width: "100%",
                maxWidth: "50px", 
                height: "auto",
              }}
            />
        <div className="tech-description">Visual Paradigm</div> {/* Tooltip text */}
      </div>
    </Col>

    {/* Loop through tech stack to render icon with hover effect */}
    {Object.keys(toolDescription).map((tech) => (
      <Col xs={4} md={2} key={tech} className="tech-icons" style={{ height: "120px" }}>
        {/* Icon rendering directly from iconMap */}
        <div className="tech-icon-container">
          {iconMap[tech]}
          <div className="tech-description">{toolDescription[tech]}</div> {/* Tech description */}
        </div>
      </Col>
    ))}
  </Row>
  );
}

export default Toolstack;
