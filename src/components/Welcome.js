//Plant Parenthood
import React, { Component } from 'react';
import logoko from "../assets/pplogo-ko.png";


class Welcome extends Component {



  render() {
    return <div>
        <div className="welcome">
          <img className="logoko" src={logoko} alt="plant parenthood" />

          <div className="welcomeWrapper">
          <div className="welcomeContainer">
          <h1 className="welcomeHeading">A Digital Nursery for the Modern Plant Parent.</h1>
          <p className="welcomeCopy">Helping you maintain the total health and wellness of your leafy fam.</p>

          {/* <p className="welcomeCopy">Plant Parenthood is a digital nursery that helps you manage the total health and wellbeing of your leafy little ones.</p> */}
          </div>
          </div>
        


        </div>


      </div>;
  }
}

export default Welcome;