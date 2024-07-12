import React from "react";
import ReactTooltip from "react-tooltip";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiSpark ,DiGoogleCloudPlatform, } from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiScikitlearn,
  SiDocker,
  SiPandas,
  SiKubernetes,
  SiHelm,
  SiGithubactions,
  SiApacheairflow,
  SiFastapi,
  SiStreamlit,
  SiMysql,
  SiKeras,
  SiTerraform,
} from "react-icons/si";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython data-tip="Python"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras data-tip="Keras"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow data-tip="TensorFlow"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch data-tip="PyTorch"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy data-tip="NumPy"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas data-tip="Pandas"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit data-tip="Streamlit"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHelm data-tip="Helm Chart"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes data-tip="Kubernetes"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform data-tip="Terraform"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn data-tip="Sci-Kit Learn"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSpark data-tip="Spark"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi data-tip="Fast Api"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql data-tip="MYSQL"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions data-tip="Github Actions"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker data-tip="Docker"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow data-tip="Apache Airflow"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faMicrosoft} data-tip="Azure Cloud" size="1x"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FontAwesomeIcon icon={faGoogle} data-tip="GCP" size="1x"/>
      </Col>
      <div className="icontooltip">
        <ReactTooltip place="top" type="dark" effect="solid"/>
      </div>
    </Row>
  );
}

export default Techstack;
