//Plant Parenthood
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sig from "../assets/signature.png";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";
import step6 from "../assets/step6.png";

class Welcome extends Component {



  render() {
    return <div>
        <div className="welcome">

          <div className="welcomeWrapper">

          <div className="welcomeContainer">
          <h1 className="welcomeHeading">Congratulations,<br />new parent!</h1>
          <p className="welcomeCopy">Nothing can smooth the transition to parenthood entirely, but feeling on top of things with Plant Parenthood will help. </p>
          </div>
          </div>
        


        </div>
      <div className="welcomeSteps">
      <div className="welcomeWrapper">
        < h2 className = "welcomeSubtitle" >
          A customized care manual for your entire plant family.
        </h2>
        <div className="stepsWrapper">
          <div className="step">
          <img className="stepImage" src={step1} alt="plant icon" />
          <p>Grow or adopt a plant</p>
          </div>

          <div className="step">
          <img className="stepImage" src={step2} alt="plant icon" />
          <p>Take it's picture</p>
          </div>

          <div className="step">
          <img className="stepImage" src={step3} alt="plant icon" />
          <p>Give it a name</p>
          </div>

          <div className="step">
          <img className="stepImage" src={step4} alt="plant icon" />
          <p>Record unique care requirements</p>
          </div>

          <div className="step">
          <img className="stepImage" src={step5} alt="plant icon" />
          <p> Save your plant to your digital greenhouse</p>
          </div>

          <div className="step">
          <img className="stepImage" src={step6} alt="plant icon" />
          <p>Easily care for your entire plant family</p>
          </div>
        </div>
      </div>
      </div>

      </div>;
  }
}

export default Welcome;