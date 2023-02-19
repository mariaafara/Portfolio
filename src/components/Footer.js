import React from "react";
import { Container } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <ul className="footer-icons">
        <li className="social-icons">
          <a
            href="https://github.com/mariaafara"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/mariaafara"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="mailto:maria-afara5@hotmail.com"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillMail />
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;