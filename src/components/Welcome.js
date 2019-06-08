//Plant Parenthood
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sig from "../assets/signature.png";

class Welcome extends Component {



  render() {
    return <div>
        <div className="welcome">

          <div className="wrapper">

          <div className="welcomeContainer">
          <h1 className="welcomeHeading">Congratulations,<br/>new parent!</h1>
          <p className="welcomeCopy">Nothing can smooth the transition to parenthood entirely, but feeling on top of things with Plant Parenthood will help.</p>
          </div>
          </div>
        


        </div>
      <div className="welcomeSteps">

      </div>

      </div>;
  }
}

export default Welcome;