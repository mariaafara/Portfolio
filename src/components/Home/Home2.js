import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import woman_portfolio from "../../Assets/woman_potfolio.png";

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

                I am a passionate ML engineer️
                <br />
                <br /> My fields of interest include <i><b className="purple">Data Engineering, Deep Learning, Machine Learning, Natural Language Processing, Data Science, and MLOps.</b></i>
                <br />
                <br />
                I am committed to using technology to solve real-world problems, and I believe that <i><b className="purple">NLP and ML</b></i> are powerful tools that can help us understand and interact with language in new and exciting ways. My current focus is on ensuring that these models are robustly and reliably deployed in production environments.
                <br />
                <br />
                I believe that ML/DL models only create value once they’re in production. A model’s true worth is realized when it is reliably deployed and supported in production for its intended usage. Ensuring smooth and efficient transitions from development to production is where my expertise lies.
                <br />
                <br />
                I am always eager to learn new things and take on new challenges, particularly those that bridge the gap between ML model development and operational deployment.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={woman_portfolio} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/mariaafara"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mariaafara/"
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
