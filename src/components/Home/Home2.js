import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              As a Cloud DevOps Engineer, I specialize in designing, implementing,
              and maintaining cloud-based systems and applications in a DevOps environment.
              My expertise includes collaborating with teams to streamline the software development process, utilizing
              <i>
                <b className="purple">  automation </b>
              </i> 
              and continuous integration/continuous delivery
              <i>
                <b className="purple">  (CI/CD) pipelines </b>
              </i>
              for rapid and reliable software releases. With proficiency in cloud platforms like 
              <i>
                <b className="purple">  AWS </b>
              </i>
              as well as programming and scripting languages like 
              <i>
                <b className="purple">  Python, Bash, JavaScript. </b>
              </i>
              I am able to create efficient and scalable solutions. Additionally,
              my experience with containerization technologies like
              <i>
                <b className="purple">  Docker and Kubernetes, </b>
              </i> 
              and monitoring tools like
              <i>
                <b className="purple">  CloudWatch and Grafana, </b>
              </i> 
              allows me to ensure the performance,
              security, scalability, and reliability of cloud-based applications and systems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/HamLuci-byte"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamza-naeem-0ba491186"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
