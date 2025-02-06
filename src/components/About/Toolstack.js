import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiCanva,
  SiAndroidstudio,
  SiJira,
} from "react-icons/si";
import { FaGithub, FaFigma } from "react-icons/fa";
import powerBI from "../../Assets/power-bi.svg";
import visualParadigm from "../../Assets/visual-paradigm-icon.png";

function Toolstack() {
  const toolDescription = {
    SiVisualStudioCode: "Visual Studio Code",
    FaGithub: "Github",
    SiPostman: "Postman",
    SiCanva: "Canva",
    FaFigma: "Figma",
    SiAndroidstudio: "Android Studio",
    SiJira: "Jira",
  };
  
  const iconMap = {
    powerBI: <img src={powerBI} alt="Power BI" style={{ width: "4rem", height: "4rem", objectFit: "contain" }} />,
    // SiVisualStudioCode: <SiVisualStudioCode />,
    FaGithub: <FaGithub />,
    SiPostman: <SiPostman />,
    FaFigma: <FaFigma />,
    SiCanva: <SiCanva />,
    SiAndroidstudio: <SiAndroidstudio />,
    SiJira: <SiJira />,
    visualParadigm: <img src={visualParadigm} alt="Visual Paradigm" style={{ width: "50px", height: "auto" }} />,
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center", margin: "20px", height: "120px" }}>
        <div className="tech-icon-container">
          {iconMap.powerBI}
          <div className="tech-description">Power BI</div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ textAlign: "center", margin: "20px", height: "120px" }}>
        <div className="tech-icon-container">
          {iconMap.visualParadigm}
          <div className="tech-description">Visual Paradigm</div>
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
