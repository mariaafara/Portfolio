import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function CertificationCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>

        {/* Link to the certificate image */}

         <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
            {<a href={props.certificateLink}>
                <img src={props.certificateImage} class="img-fluid"/>
            </a>}
         </div>
        {/*//style={{ width: "600px", height: "500px", }}*/}

        {"\n"}
        {"\n"}


      </Card.Body>
    </Card>
  );
}

export default CertificationCards;
