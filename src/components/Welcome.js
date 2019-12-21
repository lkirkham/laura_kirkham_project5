//Plant Parenthood
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import sig from "../assets/signature.png";
import logoko from "../assets/pplogo-ko.png";
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
          <img className="logoko" src={logoko} alt="plant parenthood" />

          <div className="welcomeWrapper">
          <div className="welcomeContainer">
          <h1 className="welcomeHeading">A digital nursery for the modern plant parent.</h1>
          <p className="welcomeCopy">Helping you maintain the total health and wellness of your leafy fam.</p>

          {/* <p className="welcomeCopy">Plant Parenthood is a digital nursery that helps you manage the total health and wellbeing of your leafy little ones.</p> */}
          </div>
          </div>
        


        </div>


      </div>;
  }
}

export default Welcome;