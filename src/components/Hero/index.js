import React from "react";
import "./style.css";
import clouds from "./clouds.png"


function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${clouds})` }}>

      <h1>Simon Colman</h1>
        <h2>portfolio made with react</h2>
    </div>
    
  );
}

export default Hero;
