import React from "react";
import Card from "react-bootstrap/Card";
import ExperienceBox from "./ExperienceBox";
import './ExperienceBox.css';




function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi Everyone, I am <span className="purple">Rajja Farhan</span> from 
    <span className="purple">Karachi, Pakistan</span>. I am currently an undergraduate 
    student at <span className="purple">NED University</span>, pursuing a Bachelor's 
    degree in Software Engineering since November 2021. I have maintained a CGPA of 
    <span className="purple">3.93</span> Prior to this, I completed my intermediate education at 
    <span className="purple">Usman Public School And Higher Secondary</span> with a score 
    of 95% in 2021, securing the top 10th position in the inter-board examinations. I 
    also achieved a score of 90% in my matriculation in 2019.
  </p>
  <p style={{ color: "rgb(155 126 172)" }}>
    "The beauty of code lies in its ability to transform ideas into reality."
  </p>
  <footer className="blockquote-footer">Rajja Farhan</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
