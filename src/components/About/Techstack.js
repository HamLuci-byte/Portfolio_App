import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiDocker,
} from "react-icons/di";
import {
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
  SiSonarqube,
  SiPostgresql,
  SiNginx,
  SiChef,
} from "react-icons/si";
import {
  FaAws,
  FaJenkins,
} from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJenkins/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChef/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>    
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube/>
      </Col>     
    </Row>
  );
}

export default Techstack;
