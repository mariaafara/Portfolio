import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fashion_classifier from "../../Assets/Projects/fashion_classifier.png";
import face_detection from "../../Assets/Projects/face_detection.png";
import mt_quality from "../../Assets/Projects/mt_quality.png";
import qa from "../../Assets/Projects/qa.png";
import docSearch from "../../Assets/Projects/docSearch.png";
import map_gen from "../../Assets/Projects/map_gen.png";
import nmt from "../../Assets/Projects/nmt.png";
import hotel_recommender from "../../Assets/Projects/hotel_recommender.png";
import txt_editor from "../../Assets/Projects/txt_editor.png";
import ecom_regression from "../../Assets/Projects/ecom_regression.png";
import breaking_news from "../../Assets/Projects/breaking_news.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docSearch}
              isReport={false}
              title="Document Search"
              description={`Built a system to filter documents based on a specified set of company names and keywords, with the output being a set of CSV files containing filtered documents and their associated mentions.
                            Implemented a hybrid document search engine combining N-gram extraction and semantic embeddings to compare similarity between documents and a query.
                            Utilized an inverted index data structure to store the mapping between terms (N-grams) and the documents they appear in.
                            Preprocessed the input queries and documents by removing punctuation, new lines, converting to lowercase, tokenizing, removing stop words, and lemmatizing.
                            Developed a simple API using FastAPI to simplify the use of the search engine, allowing for running interactive queries and adding new documents to the database.
                            Containerized the system using Docker to allow for easy setup and reproducibility.`}
              ghLink="https://github.com/mariaafara/documentSearch"
             /* demoLink="https://github.com/mariaafara/MT-quality-prediction" */
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={map_gen}
              isReport={false}
              title="Dungeon Map Generator"
              description={`Developed a map generator using Q-learning, a technique of reinforcement learning,  that produces a maze with a starting point, ending point, and treasure location, all connected by a path.
                            Built a maze generator API service with FastAPI, a cutting-edge web framework for creating APIs.
                            Created API documentation with Swagger UI for easy API exploration and testing.
                            Generated an output response that displays a plot of the generated maze with markers for the starting point, treasure point, and ending point.
                            Created s user-friendly web application with Streamlit to interact with the API and visualize the results of the project.
                            Implemented the use of Docker containers to package the API service and the UI service.
                            Utilized Docker Compose to containerize the application and simplify the deployment process.
                            Applied object-oriented programming principles to design and implement the agent\'s decision-making process.`}
              ghLink="https://github.com/mariaafara/DungeonMapGenerator"
             /* demoLink="https://github.com/mariaafara/MT-quality-prediction" */
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qa}
              isReport={false}
              title="QA"
              description={`Implemented a question answering system using semantic similarity matching.
                            Utilized a BERT model to convert questions to feature vectors.
                            Employed Milvus, an open-source vector similarity search engine and vector database, to retrieve the most similar ID(s) to the user's question.
                            Used MongoDB to return the corresponding answer(s) for the retrieved ID(s).
                            Collected a large number of questions with answers for the system to learn from.
                            Enabled users to insert new question-answer pairs into the database and delete existing ones.
                            Built a RESTful API using FastAPI to provide users with a simple and intuitive way to interact with the Q&A system.
                            Containerized the Q&A system with Docker, making it easy to deploy and run the system in different environments.
                            Set up the system by downloading a pre-trained BERT model, using Bert-as-a-service, initializing the Milvus collection and index, and running the FastAPI server in a Docker container.`}
              ghLink="https://github.com/mariaafara/QA"
             /* demoLink="https://github.com/mariaafara/MT-quality-prediction" */
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mt_quality}
              isReport={false}
              title="MT Quality Prediction"
              description={`Developed machine learning models to predict the quality of machine translation engine output using regression techniques.
                            Divided the dataset into training, validation, and testing data and used cross-validation technique to evaluate the performance of the models.
                            Implemented baseline regression models including SVR, XGBoost, Gradient Boosting, and RandomForests to establish a baseline model performance.
                            Conducted feature scaling and transformation and performed hyperparameter tuning using RandomizedSearch to improve model performance.
                            Identified a problem in the data where the predicted values were centered around the mean and attempted to solve it by using the SMOGN technique and adding more features and tuning parameters.`}
              ghLink="https://github.com/mariaafara/MT-quality-prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nmt}
              isReport={false}
              title="Neural Machine Translation"
              description={`Developed a machine learning model for neural machine translation (NMT) using a general encoder-decoder architecture.
                            Preprocessed a large-scale parallel corpus dataset to prepare it for NMT training, including data cleaning, filtering, normalization, and encoding.
                            Implemented a custom Language class to manage vocabulary dictionaries and numerical encoding of source and target language sentences.
                            Evaluated the trained model using multiple metrics, including perplexity, accuracy, and BLEU score, to measure its performance on both the training and validation sets.
                            Fine-tuned the hyperparameters of the model to improve its performance and generalization capabilities, using techniques such as learning rate decay, dropout, and early stopping.`}
              ghLink="https://github.com/mariaafara/neural-machine-translation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face_detection}
              isReport={false}
              title="Face Landmark Detection"
              description={`Developed a model for facial landmark detection using a dataset of 7,049 images with 15 features.
                            Goal was to detect the coordinates and orientation of eyes, eyebrows, nose, and mouth in each image.
                            In the data preparation phase, performed EDA and feature engineering, created a custom data generator for mini-batch loading and data augmentation, built a prediction model for each feature, and labeled missing values using trained models.
                            Used 14 models to fill missing values in the dataset since more than half of the examples contained missing values.
                            Used various deep learning architectures for prediction models and data augmentation techniques.
                            Generated sample images using the custom data generator, including augmented images.
                            Trained a main prediction model using the prepared dataset to predict all 15 facial features.`}
              ghLink="https://github.com/mariaafara/face-landmark-detection"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom_regression}
              isReport={false}
              title="Ecommerce Customer Regression"
              description={`It is asked to a company to decide whether to focus the efforts on developing the mobile application or the website for further improving the sales.
              The solution involves exploring the provided dataset using data visualization to understand the correlations between different factors and how they affect how much the customer spends.
              Several baseline regression models were built, including Ridge regression, KNeighborsRegressor, SVR, DecisionTreeRegressor, RandomForestRegressor, AdaBoostRegressor, GradientBoostingRegressor, ExtraTreesRegressor, VotingRegressor, and XGBoost.
              The results suggest that the company should focus their efforts on improving their mobile application rather than their website.`}
              ghLink="https://github.com/mariaafara/ecommerce-customer-regression"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={txt_editor}
              isReport={true}
              title="Text editor"
              description={`Constructed a text editor interface that is capable of predicting the next word in a sentence, and that spell checks the written word and proposes synonyms or acronyms replacements for each word in the input text.`}
              ghLink="https://drive.google.com/file/d/11zL7mQmOz2SoinIbwu6DfwCKT5PsfDio/view"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breaking_news}
              isReport={true}
              title="Breaking News Detection Based on Text Summarization"
              description={`We prefer to read the summary of articles before we decide to jump in for reading the entire article.
              Built a summarization model to summarize news articles.
              Identified keywords which will provide semantic relations to breaking news and used a vocabulary list which is collected by scraping breaking news websites in order to do unsupervised learning for our unlabeled dataset.
              Built a classification model to detect breaking news.`}
              ghLink="https://drive.google.com/file/d/1r4lcourDZV1K5QvXomA8CnaFnerszV93/view"
            />
          </Col>

            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fashion_classifier}
              isReport={false}
              title="Fashion Classification"
              description={`Trained an Image (Fashions) Classification model.
              Deployed the classifier using TensorFlow Serving with Docker.
              Created a visual web interface using Flask web framework to help end-users to consume predictions through API calls.`}
              ghLink="https://github.com/mariaafara/Deploying-FashionClassifier-using-TensorFlow-Serving-with-Docker-and-Flask"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel_recommender}
              isReport={true}
              title="Hotel Recommendation System"
              description={`Built a recommender system of the best hotels based on their characteristics, then recommend hotels which are most similar in terms of reviews to a particular hotel specified by the user.
                            Used two approaches, content based approach and user- and item- based collaborative filtering approach.`}
              ghLink="https://drive.google.com/file/d/1r5YMa4C63X25rmm6yi4HRjt9GZL9PSyV/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
