import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function EducationCards(props) {

  const courses = props.courses.split('\n').map((course) => (
    <p style={{ border: "1px solid white", padding: "5px", margin: "5px", minWidth: "100px" }}>
      <strong className="purple">{course}</strong>
    </p>
  ));

  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title>{props.period}</Card.Title>
        <Card.Title>{props.uni_location}</Card.Title>

        <Card.Text style={{ textAlign: "center", padding: "25px" }}>
          {props.description}
        </Card.Text>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
          {courses}
        </div>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default EducationCards;
