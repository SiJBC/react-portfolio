import React, { Component } from "react";
import Card from "../components/Card";


import Hero from "../components/Hero";
// import image1 from "react-booklist.png"




class Portfolio extends Component {



  render() {
    return (
      <div>

          <div className>
          <Hero/>
          <Card/>
          </div>
      
      </div>
    );
  }
}

export default Portfolio;
