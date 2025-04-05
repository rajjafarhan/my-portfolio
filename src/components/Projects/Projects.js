import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pos from "../../Assets/Projects/pos-pic.png";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import trimtime from "../../Assets/Projects/Apps.png";
import goatlang from "../../Assets/Projects/goatlang-pic.jpeg";
import flint from "../../Assets/Projects/flint.png";
import tnp from "../../Assets/Projects/tnp.png";
import macWorldImage from "../../Assets/Projects/macworld.png";
import apple from "../../Assets/Projects/apple.png";
import ideaVault from "../../Assets/Projects/ideavault.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flint}
              isBlog={false}
              title="FLINT"
              stack="Next.js, Nest.js, Python, Generative AI, Azure, GitHub"
              description="Flint is an AI-powered platform that streamlines the Software Development Life Cycle (SDLC) by automating requirement engineering, architecture documentation, and team management. It uses Generative AI and NLP to transform unstructured inputs into structured user stories, UML diagrams, and skill-based task assignments."
              ghLink="https://github.com/flint-dev01/FlintFrontend"
              demoLink="https://flint-frontend.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goatlang}
              isBlog={false}
              title="GOATLANG PROG LANGUAGE"
              stack="Javascript ,Babel ,React Js"
              description="Incorporated lexical analysis,AST generation,interpretation, and compilation processes,utilizing Babel for enhanced language features.Our in-house programming language,following SDLC phases—requirements,design,development,and testing."
              ghLink="https://github.com/syedmammar123/goatLang"
              demoLink="https://www.npmjs.com/package/goatcod"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tnp}
              isBlog={false}
              title="TNP - Travel & Tours"
              stack="React Js, Node Js, Express Js, MongoDB"
              description="TNP is a comprehensive travel website offering tailored travel packages, hotel bookings, and car rental services. Users can explore destinations, compare prices, and plan their trips seamlessly. The platform provides detailed itineraries, customer reviews, and secure payment options, ensuring a hassle-free travel experience."
              ghLink="https://github.com/btsstudio01/tnp"
              demoLink="https://tnp-bay.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={macWorldImage}
              isBlog={false}
              title="Mac World Properties"
              stack="React Js, Node Js, Express Js, MongoDB"
              description="Mac World Properties is a trusted real estate platform offering a wide range of properties, including houses, apartments, and commercial spaces. Whether you're looking to buy, rent, or invest, the platform provides detailed property listings, virtual tours, and expert guidance to help you make informed decisions."
              ghLink="https://github.com/AsadUllahkhan19/realestatebackend"
              demoLink="https://www.macworldproperties.com/"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pos}
              isBlog={false}
              title="POS SYSTEM"
              stack="ReactJs And NodeJs"
              description="Streamline your business with our comprehensive Admin Dashboard, featuring:
Sales and expense tracking for informed decision-making
Inventory management with barcode scanning for efficient stock control
Automated VAT calculation and receipt creation, with secure login/logout functionality"
              ghLink="https://github.com/rajjafarhan/POS-SYSTEM"
              demoLink="https://youtu.be/HAc8wwrynzA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trimtime}
              isBlog={false}
              title="Trim Time"
              stack="Flutter and Firebase"
              description="Trim Time is a mobile app for easy barber appointment booking.
Streamlines booking process, reduces wait times.
Clients book and pay online, barbers manage schedules.
Modernizes traditional barber services with digital automation.
Enhances efficiency and customer satisfaction for a seamless experience."
              ghLink="https://github.com/JazebJaved468/TrimTime-Flutter"
              demoLink="https://youtu.be/BHbdNJaiv6Y?si=NK4A81F7KGVqONAj"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ideaVault}
              isBlog={false}
              title="IDEA VAULT"
              stack="ReactJs And NodeJs"
              description="Introducing an Idea Sharing & Investment Platform where users share ideas and connect. Engage through upvotes and comments to foster community discussion. Real-time chatbox powered by WebSockets enables seamless communication. Turn ideas into reality through investment and collaboration."
              ghLink="https://github.com/usman-90/IDEA-VAULT"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="APPLE WEBSITE CLONE"
              stack="ReactJs And NodeJs"
              description="Created a clone of the Apple website, replicating its sleek design and user-friendly interface. A precise replica that mirrors the original site's features, functionality, and visual appeal."
              ghLink="https://github.com/rajjafarhan/clone-apple-web"
              demoLink="https://www.linkedin.com/posts/rajjafarhan2_webdev-bootstrap-cloning-activity-7049732728618913792-tk5e?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="ECOMMERCE WEBSITE"
              stack="ReactJs And NodeJs"
              description="Built a responsive ecommerce site for clothing using React, HTML, and CSS.
Delivers a seamless shopping experience across devices and screen sizes.
Features a modern and intuitive design, easy navigation, and secure checkout.
Showcases products with high-quality images, detailed descriptions, and customer reviews."
              ghLink="https://github.com/rajjafarhan/project"
            />
          </Col>
        </Row>
        <p style={{ color: "white" }}>
          Check my more projects on my Github
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
