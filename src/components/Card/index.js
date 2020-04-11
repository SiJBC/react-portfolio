import React from "react";
import "./style.css";

function Card(props) {

  return (
<div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.name}
          </li>
          <li>
            <strong>User story:</strong> {props.occupation}
          </li>
          <li>
            <strong>Deployed:</strong> <a href={ props.Deployed}>redirect to deployed site</a>
         
          </li>
          <li>
            <strong>Github:</strong> <a href={ props.Github}>redirect to github repo</a>
             {props.location}
          </li>
        </ul>
      </div>
    </div>
  
  );
}

export default Card;
