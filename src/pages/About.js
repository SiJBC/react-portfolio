import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Simon from "../components/portrait.jpg"
import "./style.css"

function About() {
  return (
    <div>
      <Hero>
        <h1>Simon Colman</h1>
        <img className = "img-style" src={Simon} alt="Simon" thumbnail = "true"/>
        <h2>React portfolio</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I am passionate about creating a meaningful user experience.  I create simplistic elegant designs 
            with the latest technology.
            </p>
            <h3>Technical skills</h3>
              <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>progressive web applications</li>
                  <li>javascript</li>
                  <li>Templates</li>
                  <li>Sql/No Sql</li>
                  <li>Node</li>
                  <li>React</li>
                  <li>Full stack applications</li>
              </ul>
              <h3>Soft Skills</h3>
              <ul>
                  <li>Communication</li>
                  <li>Rapport building</li>
                  <li>Problem Solving</li>
                  <li>Public speaking</li>
                  <li>Time management</li>
                  <li>Team player</li>
                  <li>Achieving deadlines</li>
              </ul>
            <p>
                  
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
