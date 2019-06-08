//Plant Parenthood
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import tropicalPlant from "../assets/tropicalPlant.svg";
import pplogo from "../assets/pplogo.png"
import pplogoKO from "../assets/pplogoKO.png";
import sig from "../assets/signature.png";

class Welcome extends Component {



  render() {
    return <div>
        <div className="welcome">
          <header>
            <figure className="logoContainer">
              <img src={pplogoKO} alt="logo" />
            </figure>
          </header>
          <div className="wrapper">

          <h1 className="welcomeHeading">Congratulations,<br/>new parent!</h1>
           
          </div>

          {/* Plant by Rfourtytwo from the Noun Project */}
          {/* SVG SVG SVG */}
          {/* <figure className="welcomeImageContainer">
          <img src={tropicalPlant} className="welcomeImage" alt="logo" />
        </figure> */}

          {/* SVG SVG SVG */}
        </div>
      </div>;
  }
}

export default Welcome;