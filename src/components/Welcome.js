//Plant Parenthood
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import tropicalPlant from "../assets/tropicalPlant.svg";
class Welcome extends Component {



  render() {
    return (
      <div className="welcome">
        {/* <h1 className="welcomeHeading">Welcome to Plant Parenthood</h1> */}

        {/* Plant by Rfourtytwo from the Noun Project */}
        {/* SVG SVG SVG */}
        <figure className="welcomeImageContainer">
          <img src={tropicalPlant} className="welcomeImage" alt="logo" />
        </figure>
      
        
        {/* SVG SVG SVG */}













        
      </div>
    )
  }
}

export default Welcome;