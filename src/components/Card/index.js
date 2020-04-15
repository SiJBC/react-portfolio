import React from "react";
import "./style.css";
import projects from "./projects.json"
import image1 from "./react-booklist.png"
import image2 from "./employee-directory.png"
import image3 from "./offline-budget.png"
import image4 from "./fitness-tracker.png"
import image5 from "./onepageman.png"
import image6 from "./weather-dashboard.png"

function Card(props) {

  return (

    <div>
      <div clasName="container">
        <div className="row justify-content-center bg-secondary">
          <div className="card col-">
            <div className="img-container">
              <img alt={"props.name"} src={image1} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {projects[0].name}
                </li>
                <li>
                  <strong>User story:</strong> {projects[0].story}
                </li>
                <li>
                  <strong>Technology used:</strong> {projects[0].technology}
                </li>
                <li>
                  <strong>Deployed:</strong> <a href={projects[0].Deployed}> link </a>
                </li>
                <li>
                  <strong>Github:</strong> <a href={projects[0].Github}> link </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="img-container">
              <img alt={"props.name"} src={image2} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {projects[1].name}
                </li>
                <li>
                  <strong>User story:</strong> {projects[1].story}
                </li>
                <li>
                  <strong>Technology used:</strong> {projects[1].technology}
                </li>
                <li>
                  <strong>Deployed:</strong> <a href={projects[1].Deployed}> link </a>
                </li>
                <li>
                  <strong>Github:</strong> <a href={projects[1].Github}> link </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="img-container">
              <img alt={"props.name"} src={image3} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {projects[2].name}
                </li>
                <li>
                  <strong>User story:</strong> {projects[2].story}
                </li>
                <li>
                  <strong>Technology used:</strong> {projects[2].technology}
                </li>
                <li>
                  <strong>Deployed:</strong> <a href={projects[2].Deployed}> link </a>
                </li>
                <li>
                  <strong>Github:</strong> <a href={projects[2].Github}> link </a>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="row justify-content-center bg-secondary">
          <div className="card">
            <div className="img-container">
              <img alt={"props.name"} src={image4} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {projects[3].name}
                </li>
                <li>
                  <strong>User story:</strong>  {projects[3].story}
                </li>
                <li>
                  <strong>Technology used:</strong> {projects[3].technology}
                </li>
                <li>
                  <strong>Deployed:</strong> <a href={projects[3].Deployed}> link </a>
                </li>
                <li>
                  <strong>Github:</strong> <a href={projects[3].Github}> link </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="img-container">
              <img alt={"props.name"} src={image5} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {projects[4].name}
                </li>
                <li>
                  <strong>User story:</strong> {projects[4].story}
                </li>
                <li>
                  <strong>Technology used:</strong> {projects[4].technology}
                </li>
                <li>
                  <strong>Deployed:</strong> <a href={projects[4].Deployed}> link </a>
                </li>
                <li>
                  <strong>Github:</strong> <a href={projects[4].Github}> link </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="img-container">
              <img alt={"props.name"} src={image6} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {projects[5].name}
                </li>
                <li>
                  <strong>User story:</strong> {projects[5].story}
                </li>
                <li>
                  <strong>Technology used:</strong> {projects[5].technology}
                </li>
                <li>
                  <strong>Deployed:</strong> <a href={projects[5].Deployed}> link </a>
                </li>
                <li>
                  <strong>Github:</strong> <a href={projects[5].Github}> link </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>


    </div>


  );
}

export default Card;
