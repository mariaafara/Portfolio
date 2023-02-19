import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCards";
import CertificationCard from "./CertificateCards";
import Particle from "../Particle";
import certificate1 from "../../Assets/Certificates/certificate1.png";
import certificate2 from "../../Assets/Certificates/certificate2.png";
import certificate3 from "../../Assets/Certificates/certificate3.png";
import certificate4 from "../../Assets/Certificates/certificate4.png";
import lxmls_certificate from "../../Assets/Certificates/lxmls-certificate.png";

function Education() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EducationCard
              /* imgPath={acolad} */
              isBlog={false}
              title=<strong className="purple">Master 2 in Natural Language Processing</strong>
              period=<p className="purple">2019 - 2020</p>
              uni_location=<p className="purple"> University of Lorraine, Nancy - France</p>
              description="Main Courses:"
              courses={`Deep Learning
               Machine Learning
               Data & Text Mining
               Recommendation System
               Speech & Text Processing
               Lexical Resources
               Terminology & Ontology
               Lambda Calculus`}
            />
          </Col>

          <Col md={4} className="project-card">
            <EducationCard
              /* imgPath={acolad} */
              isBlog={false}
              title=<strong className="purple">Master 1 in AI & Big Data</strong>
              period=<p className="purple">2018 - 2019</p>
              uni_location=<p className="purple"> Lebanese University FS1, Beirut - Lebanon</p>
              description="Main Courses:"

              courses={`AI & knowledge Representation
               Machine Learning
               Big Data
               Cloud Computing
               Design Patterns
               Image Processing
               Distributed Systems
               Advanced Databases`}
            />
          </Col>

          <Col md={4} className="project-card">
            <EducationCard
              /* imgPath={acolad} */
              isBlog={false}
              title=<strong className="purple">Bachelor in Computer Science</strong>
              period=<p className="purple">2015 - 2018</p>
              uni_location=<p className="purple"> Lebanese University FS5, Nabatieh - Lebanon</p>
                            description=""
              description="Main Courses:"
              courses={`Data Structures
               Graph Theory
               Mobile Development
               OOP
               Numerical Analysis
               Linear Algebra
               Databases
               Project Management
               Software Engineering`}
            />
          </Col>

        </Row>
      </Container>


        <Container>
        <h1 className="project-heading">
          <strong className="purple">Certification</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={6} className="project-card">
            <CertificationCard
              certificateLink=""
              certificateImage={lxmls_certificate}
            />
          </Col>

          <Col md={6} className="project-card">
            <CertificationCard
              certificateLink="https://www.coursera.org/account/accomplishments/specialization/certificate/AUZUZLJ6S8XS"
              certificateImage={certificate1}
            />
          </Col>

          <Col md={6} className="project-card">
            <CertificationCard
              certificateLink="https://www.coursera.org/account/accomplishments/specialization/certificate/LJDL4XU457HP"
              certificateImage={certificate2}
            />
          </Col>

          <Col md={6} className="project-card">
            <CertificationCard
              certificateLink="https://www.coursera.org/account/accomplishments/specialization/certificate/MD65BV6RPA8C"
              certificateImage={certificate3}
            />
          </Col>


          <Col md={6} className="project-card">
            <CertificationCard
              certificateLink="https://www.coursera.org/account/accomplishments/certificate/VYDGFXJXPCHY"
              certificateImage={certificate4}
            />
          </Col>

        </Row>
      </Container>

    </Container>




  );
}

export default Education;
