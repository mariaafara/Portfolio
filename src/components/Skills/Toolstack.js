import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import {
  DiGit,
  DiApple,
} from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiJupyter,
  SiPycharm,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux data-tip="Linux"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiApple data-tip="Apple"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode data-tip="Visual Studio Code"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm data-tip="Pycharm"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman data-tip="Postman"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit data-tip="Git"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter data-tip="Jupyter Lab" />
      </Col>
    </Row>
  );
}

export default Toolstack;
