import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMsqlServer } from "react-icons/di";

function Techstack() {
  const techDescriptions = {
    CgCPlusPlus: "C++: A powerful programming language for system software.",
    DiJavascript1: "JavaScript: A versatile language for web development.",
    DiNodejs: "Node.js: JavaScript runtime for server-side development.",
    DiReact: "React: A library for building user interfaces.",
    DiMongodb: "MongoDB: A NoSQL database for scalable applications.",
    SiFirebase: "Firebase: A platform for app development.",
    SiPostgresql: "PostgreSQL: A robust relational database system.",
    DiPython: "Python: A high-level programming language.",
    DiJava: "Java: A popular language for enterprise applications.",
  };

  const renderColWithTooltip = (Icon, name) => (
    <Col xs={4} md={2} className="tech-icons tooltip-container">
      <Icon />
      <div className="tooltip">{techDescriptions[name]}</div>
    </Col>
  );

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {renderColWithTooltip(CgCPlusPlus, "CgCPlusPlus")}
      {renderColWithTooltip(TbBrandCSharp, "CgCPlusPlus")}
      {renderColWithTooltip(DiJavascript1, "DiJavascript1")}
      {renderColWithTooltip(DiNodejs, "DiNodejs")}
      {renderColWithTooltip(DiReact, "DiReact")}
      {renderColWithTooltip(FaHtml5, "FaHtml5")}
      {renderColWithTooltip(MdCss, "FaHtml5")}
      {renderColWithTooltip(IoLogoJavascript, "FaHtml5")}
      {renderColWithTooltip(DiMongodb, "DiMongodb")}
      {renderColWithTooltip(SiFirebase, "SiFirebase")}
      {renderColWithTooltip(DiPython, "DiPython")}
      {renderColWithTooltip(DiJava, "DiJava")}
      {renderColWithTooltip(DiMsqlServer , "DiJava")}
    </Row>
  );
}

export default Techstack;
