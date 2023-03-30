import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hamza Naeem </span>
            <br />
            <br />
            I am a junior Cloud DevOps Engineer pursuing Masters in <span className="purple">Computer and Systems Engineering
            at TU ILMENAU</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Baking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn Trading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is not just a set of instructions, but a language that speaks to the machine, and a craft that requires precision, creativity, and a passion for continuous improvement."{" "}
          </p>
          <footer className="blockquote-footer">Hamza</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
