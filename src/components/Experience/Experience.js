import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ExperienceCards";
import Particle from "../Particle";
import acolad from "../../Assets/Experience/acolad_logo.png";
import sap from "../../Assets/Experience/SAP_logo.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Experiences </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCard
              /* imgPath={acolad} */
              isBlog={false}
              title=<strong className="purple">ML Engineer </strong>
              period=<p className="purple">October 2023 - Present</p>
              company_location=<p className="purple">Wolters Kluwer, Paris, France</p>
              description= {`Developed a new feature for analyzing legal documents leveraging Azure OpenAI LLMs and Retrieval-Augmented Generation (RAG) systems, enhancing the application's ability to provide precise answers to legal queries.
                Built services for document parsing, chunk storage in a vector database, and question answering by retrieving top-k chunks and generating answers.
                Used Langfuse to monitor and optimize the performance of the RAG system, storing user requests in PostgreSQL for comprehensive tracing and analysis.
                Designed and managed microservices architecture using RabbitMQ for inter-service communication, Kubernetes (K8s) for container orchestration, Helm charts for Kubernetes application management, Terraform for infrastructure provisioning, and leveraging Azure cloud services for scalable and efficient infrastructure management.
                Implemented Docker-based deployments and orchestrated CI/CD pipelines with GitHub Actions for automated deployment.
                Collaborated closely with project managers and software engineers to ensure alignment of development and deployment processes.`}
              skills={`Azure
               OpenAI
               RAG
               Docker
               Kubernetes
               Helm Chart
               Terraform
               Github Actions
               RabbitMQ
               Apache Airflow`}
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              /* imgPath={acolad} */
              isBlog={false}
              title=<strong className="purple">ML NLP Engineer </strong>
              period=<p className="purple">March 2021 - October 2023</p>
              company_location=<p className="purple">Acolad, Paris, France</p>
              description= {`Conducted research and developed machine learning and deep learning models using scikit-learn, HuggingFace, Keras, TensorFlow, and PyTorch on both CPU and GPU environments.
                Optimized the models to improve their performance and accuracy.
                I developed and implemented an automated deployment process for Kubernetes applications using GitHub Actions and Helm Chart. This resulted in a remarkable increase in deployment speed and efficiency, leading to faster and more efficient releases of our applications.
                Containerized the machine learning models and APIs using Docker and deployed them into production using GitHub Actions CI/CD, on both GCP and GitHub Container.
                Automated data pipelines using Airflow to improve efficiency and accuracy of the data preparation process. Designed and built pipelines for creating neural machine translation engines.
                Developed, tested, and maintained internal text-processing libraries to streamline data preparation and improve the quality of the machine translation engines.
                Solved various business problems, including identifying personal information based on GDPR using NER models, anonymizing client data by replacing sensitive information with synthetic/fake data, identifying domains of translation projects using classification models, and estimating the quality of machine translation outputs to determine the need for proofreading.
                Developed an innovative video summarization prototype that leverages OpenAI's LLMs, GPT-4 and ChatGPT, for transcription, summarization, and translation of videos, and deployed the solution on an in-premise Kubernetes cluster through a comprehensive CI/CD pipeline with GitHub Actions workflows and efficient management of backend and frontend services using Helm charts and Kubernetes resource files.`}
              skills={`Keras
               Pytorch
               TensorFlow
               NLTK
               SpaCy
               Pandas
               Sklearn
               Bert
               HuggingFace
               Transformers
               Docker
               Kubernetes
               Helm Chart
               Github Actions
               FastAPI
               GCP
               Apache Airflow`}
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              /* imgPath={sap} */
              isBlog={false}
              title=<strong className="purple"> NLP Data Scientist </strong>
              period=<p className="purple">March 2020 - August 2020 </p>
              company_location=<p className="purple">SAP Labs, Mougins, France</p>
              description={`I focused on utilizing AI/ML to extract sensitive and personal information from unstructured text in accordance with GDPR guidelines.
                            This included identifying information such as nationality, birthdate, birthplace, and ethnicity from real people biographies sourced from Wikipedia and DBpedia Knowledge Base.
                            I employed automatic annotation methods and worked with techniques such as Weak supervision, Distant supervision, Named Entity Recognition, and Relation extraction.
                            In addition, I created and fine-tuned state-of-the-art models as well as customized my own models and pipelines.`}

              skills={`Keras
              Tenserflow
              SpaCy
              Snorkel
              Pandas
              Numpy
              Matplotlib
              Sklearn
              mBert
              CammemBert
              BiLSTM
              CNN
              FastText
              SPARQL
              Docker
              PySpark`}

             />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
