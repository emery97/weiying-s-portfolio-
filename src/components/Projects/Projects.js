import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ameliaXweiying from "../../Assets/Projects/ameliaXweiying.png"
import eduHelper from "../../Assets/Projects/eduhelper.png"
import ticketFinder from "../../Assets/Projects/ticketFinder.png"
import legitAnot from "../../Assets/Projects/legitAnot.png"
import SPM from "../../Assets/Projects/SPM.png"
import sustainify from "../../Assets/Projects/sustainify.png"
import chioset from "../../Assets/Projects/chioset.jpg"

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
import { FaBootstrap } from "react-icons/fa";
import Button from "react-bootstrap/Button";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading poppins-bold">
          My Projects
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on 😊
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

         {/* Chioset Project */}
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chioset}
              isBlog={false}
              title="Chioset - React Web Application"
              description="My groupmates and I built a React-based web app that lets users organize their wardrobe in a virtual closet, try on clothes using AR, and receive weather-based outfit suggestions for the next day. The app combines fashion with technology to enhance users' outfit planning and shopping experiences.."
              ghLink="https://github.com/emery97/HackAndRoll.git"
              technologies={[<FaBootstrap />, <DiReact />]}
              isCanva={false}
            />
          </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={legitAnot}
            isBlog={false}
            title="Legit Anot - React Web Application"
            description="My groupmates and I developed a digital safety solution to evaluate suspicious links using SSL certification and user feedback. We integrated MongoDB for seamless data management, built a responsive React dashboard to display real-time metrics, and utilized an external API for accurate SSL certificate data."
            ghLink="https://github.com/enjiawu/youthxhack.git"
            technologies={[ < FaBootstrap />, <DiReact/>]}
            isCanva={true}
            canvaLink="https://www.canva.com/design/DAGbD_UhG9I/JogaW6SvL2QPgORJbO9udw/edit?utm_content=DAGbD_UhG9I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={ticketFinder}
            isBlog={false}
            title="Ticket Finder - Android Application"
            description="My groupmates and I developed an event discovery and booking app, similar to Ticketmaster. I specifically led the development of features like seat selection, ticket transfer, and user management. Additionally, I integrated Google Calendar API for event reminders and used Firebase for dynamic data management and ticket bookings."
            ghLink="https://github.com/emery97/MAD24_P02_Team3.git"
            isCanva={true} 
            canvaLink="https://www.canva.com/design/DAGbDpzpoIs/M85vZfoxhGgMjBTaL1PHqA/edit?utm_content=DAGbDpzpoIs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
            technologies={[ < DiJava />, < SiFirebase />]}             
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={eduHelper}
            isBlog={false}
            title="EduHelper - MVC Web Application"
            description="
            My groupmates and I developed a LinkedIn Learning-inspired platform that allows students to access lectures and educators to upload content. I specifically led the development of POST API calls for managing courses and lectures. I also integrated the Vimeo API to enable seamless video uploads."
            ghLink="https://github.com/NgJoeYi/BED2024Apr_P07_T08.git"
            technologies={[ < FaHtml5 />,  < MdCss />,  < DiJavascript1 />, <DiNodejs />, <DiMsqlServer />]}
          />
        </Col>
        
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={ameliaXweiying}
            isBlog={false}
            title="Amelia x Weiying"
            description="
            Created by Amelia and me for our Front-End Development assignment, this website is your go-to destination for trendy, affordable clothing designed for teenage girls. Our mission is to empower young fashion enthusiasts with stylish, budget-friendly options."
            ghLink="https://github.com/emery97/FED-ameliaXweiying.git"
            demoLink="https://emery97.github.io/FED-ameliaXweiying/"
            technologies={[ < FaHtml5 />,  < MdCss />,  < DiJavascript1 />]}
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={SPM}
            isBlog={false}
            title="Ngee Ann City"
            description="My teammates and I developed a website for Ngee Ann City as part of our software product management class. The project aimed to teach us SCRUM methodology, where I served as both the Scrum Master and Developer."
            ghLink="https://github.com/RaeannTaiYuXuan/SPM_Assignment.git"
            technologies={[ < FaHtml5 />,  < MdCss />,  < DiJavascript1 />]}
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={sustainify}
            isBlog={false}
            title="Sustainify"
            description="My teammates and I developed a website as part of our full-stack development module to help transport companies like Grab reach net-zero emissions by 2030. We created dashboards using dummy data, integrated the Gemini API to provide advice to drivers on reducing carbon emissions, and used the Gemini API to generate reports for company leaders to monitor carbon emissions and other key metrics, along with other features."
            ghLink="https://github.com/emery97/sustainify.git"
            technologies={[ < FaHtml5 />,  < MdCss />,  < DiJavascript1 />]}
          />
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
