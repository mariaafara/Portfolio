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
              I am a passionate ML/NLP engineer️
              <br />
              <br /> My fields of interests <i><b className="purple"> Data engineering, Deep Learning, Machine Learning,
              Natural Language Processing, and Data Science. </b></i>
              <br />
              <br />
              I am passionate about using technology to solve real-world problems, and I believe that
              <i><b className="purple"> NLP and ML </b></i> are powerful tools that can help us understand
              and interact with language in new and exciting ways.
              <br />
              <br />
              I believe that ML/DL models only create value once they’re in production. Otherwise, what is a model
              worth if it cannot be reliably deployed and supported in production for the intended usage.
              <br />
              <br />
              I am always eager to learn new things and take on new challenges.

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
