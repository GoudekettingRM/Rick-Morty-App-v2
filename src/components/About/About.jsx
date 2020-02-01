import React from "react";
import creator from "../../creator.jpg";
import "./about.css";

export default function About(props) {
  return (
    <div>
      <h4 className="pageTitle">About the makers of this app:</h4>
      <div className="about">
        <div className="aboutCard">
          <h5>Glootie</h5>
          <img
            className="aboutGlootieImg"
            alt="Glootie, one of the co-creators of this app"
            src="https://vignette.wikia.nocookie.net/rickandmorty/images/3/30/Glootie.png/revision/latest/scale-to-width-down/620?cb=20190720005839"
          />
          <p className="aboutCaption">
            This is Glootie, one of the two proud creators of this app!
          </p>
        </div>
        <div className="aboutCard">
          <h5>Robin</h5>
          <img
            className="aboutRobinImg"
            alt="Robin, one of the co-creators of this app"
            src={creator}
          />
          <p className="aboutCaption">
            This is Robin, the second of the two proud creators of this app!
          </p>
        </div>
      </div>
    </div>
  );
}
