import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ExperienceBox from "./ExperienceBox";
import './ExperienceBox.css';

const experienceData = [
  {
    title: 'Junior Software Engineer',
    company: 'Caliber Tech',
    date: 'Dec. 2024 – Present',
    location: 'Remote',
    details: [
      'Developing and optimizing frontend applications using React.js to deliver engaging user experiences.',
      'Building and maintaining backend services with Django, ensuring scalability and performance.',
      'Collaborating with cross-functional teams to align development with business requirements and project goals.'
    ]
}
,
  {
    title: 'Python Developer - Internship',
    company: 'Rewterz',
    date: 'Sept. 2024 – Dec. 2024',
    location: 'Karachi, Pakistan',
    details: [
      'Explored Security Incident Response Platform (SIRP) and Security Orchestration, Automation, and Response (SOAR) solutions.',
      'Developed Python scripts for system integrations and automation.',
      'Built a car booking application using Django, inspired by Careem and Uber, with a separate driver dashboard for enhanced functionality.'
    ]
}
,
  {
    title: 'Software Engineer - Internship',
    company: 'Mazik Global',
    date: 'July 2024 – Aug. 2024',
    location: 'USA',
    details: [
      'Worked on Power Apps, model-driven app.',
      'Developed Canvas App and used Power BI.',
      'Implemented workflows using Power Automate.'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'MAC WORLD TECHNOLOGIES',
    date: 'Sept. 2023 – present',
    location: 'UAE',
    details: [
      'Developed applications using HTML, CSS, React, and Node.js.',
      'Proficient in Bootstrap and Tailwind CSS.',
      'Created React Native mobile screens.',
      'Designed a global port data API.'
    ]
  },
  {
    title: 'Research Assistant',
    company: 'ELITE GLOBAL EXCELLENCE',
    date: 'Feb. 2024 – present',
    location: 'Malaysia',
    details: [
      'Write and review research papers on IoT and deep learning.'
    ]
  },
  {
    title: 'Software Engineer - Internship',
    company: 'JLF ORGANIZATION',
    date: 'Dec. 2023 – Feb. 2024',
    location: 'USA',
    details: [
      'Designed and built the JLF website.',
      'Conducted MERN stack training sessions.'
    ]
  },
 
];

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>


        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <h1 className="project-heading">
            My <strong className="purple">Experience </strong>

          </h1>
          <Col md={12} className="project-card">
          <div className="experience-container">
            {experienceData.map((experience, index) => (
              <ExperienceBox
                key={index}
                title={experience.title}
                company={experience.company}
                date={experience.date}
                location={experience.location}
                details={experience.details}
              />
            ))}
          </div>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
