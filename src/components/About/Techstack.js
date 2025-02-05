import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbBrandCSharp } from "react-icons/tb";
import { DiJavascript1, DiNodejs, DiReact, DiMongodb, DiPython, DiJava, DiMsqlServer } from "react-icons/di";
import { SiFirebase, SiPostgresql } from "react-icons/si";
import { FaHtml5, FaBootstrap } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";

function Techstack() {
  const techDescriptions = {
    CgCPlusPlus: "C++",
    DiJavascript1: "JavaScript",
    DiNodejs: "Node.js",
    DiReact: "React",
    DiMongodb: "MongoDB",
    SiFirebase: "Firebase",
    SiPostgresql: "PostgreSQL",
    DiPython: "Python",
    DiJava: "Java",
    DiMsqlServer: "MSSQL",
    FaHtml5: "HTML5",
    MdCss: "CSS",
    IoLogoJavascript: "JavaScript",
    FaBootstrap: "Bootstrap",
    TbBrandCSharp: "C#"
  };

  const iconMap = {
    CgCPlusPlus: <CgCPlusPlus />,
    DiJavascript1: <DiJavascript1 />,
    DiNodejs: <DiNodejs />,
    DiReact: <DiReact />,
    DiMongodb: <DiMongodb />,
    SiFirebase: <SiFirebase />,
    SiPostgresql: <SiPostgresql />,
    DiPython: <DiPython />,
    DiJava: <DiJava />,
    DiMsqlServer: <DiMsqlServer />,
    FaHtml5: <FaHtml5 />,
    MdCss: <MdCss />,
    IoLogoJavascript: <IoLogoJavascript />,
    FaBootstrap: <FaBootstrap />,
    TbBrandCSharp: <TbBrandCSharp />
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
      {/* Loop through tech stack to render icon with hover effect */}
      {Object.keys(techDescriptions).map((tech) => (
        <Col xs={4} md={2} key={tech} className="tech-icons" style={{ height: "120px" }}>
          {/* Icon rendering directly from iconMap */}
          <div className="tech-icon-container">
            {iconMap[tech]}
            <div className="tech-description">{techDescriptions[tech]}</div> {/* Tech description */}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
