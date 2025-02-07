import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Experience from "./Experience";
import { CgCPlusPlus } from "react-icons/cg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Aboutcard />

        <h1 className="project-heading poppins-bold">
          Languages 
        </h1>

        <Techstack />

        <h1 className="project-heading poppins-bold">
          Tools Used
        </h1>
        <Toolstack />
        <Experience />
      </Container>
    </Container>
  );
}

export default About;
