import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/myAvatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    Hi, I'm Rajja Farhan, a software engineering undergrad at NED University with a CGPA of 3.93.
    <br />
    <br />I am proficient in
    <i>
      <b className="purple"> JavaScript, Python, and C++. </b>
    </i>
    <br />
    <br />
    I have developed multiple websites and projects, and I am skilled in the
    <i>
      <b className="purple"> MERN stack. </b>
    </i>
    <br />
    <br />
    I am passionate about coding and have a keen interest in developing new &nbsp;
    <i>
      <b className="purple">web technologies and products</b> as well as exploring areas related to{" "}
      <b className="purple">AI.</b>
    </i>
    <br />
    <br />
    Whenever possible, I apply my passion for creating products using <b className="purple">Node.js</b> and
    <i>
      <b className="purple">
        {" "}
        modern JavaScript libraries and frameworks
      </b>
    </i>
    &nbsp; like
    <i>
      <b className="purple"> React.js and Next.js.</b>
    </i>
    <br />
    <br />
    In addition to coding, I enjoy reading, content writing, playing throwball, and indulging in poetry.
    <br />
    
    
  </p>
</Col>

          <Col md={4} className="myAvtar">
  <Tilt>
    <img src={myImg} className="img-fluid rounded-avatar" alt="avatar" />
  </Tilt>
</Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/rajjafarhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rajjafarhan2/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/rajja.farhan/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
