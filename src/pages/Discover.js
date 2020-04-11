import React, { Component } from "react";
import Card from "../components/Card";
import projects from "./projects.json"
import Row from "../components/Row";
import Col from "../components/Col";
// import image1 from "react-booklist.png"




class Discover extends Component {
  state = {
projects
  };


  render() {
    return (
     
      <Row>
       
      <Col size="md-12">
      
      <div>
 
        {this.state.projects.map( projects =>
          <Card 
          key={projects.id}
          name={projects.name}
          image={projects.image}
          Deployed={projects.Deployed}
          Github={projects.Github}/>
        )
        }
      </div>
      </Col>
    </Row>
     
    );
  }
}

export default Discover;
