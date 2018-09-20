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
            {/* <p className="greeting">We don’t own homes. We don't have kids. We're the punch linWe We are millenials and completely addicted to plants. They come in all different shapes and sizes from tiny cacti to towering Fiddle Leaf Figs, but one thing is for sure - we've got a lot of them.</p> */}
            <div className="letter">
              {/* <figure className="logoContainer">
              <img src={pplogoKO} alt="logo" />
            </figure> */}
              <h2 className="greeting">An open letter to Millenials,</h2>
              <p className="greetingCopy">
                We don’t own homes. We don't have kids. Neque sodales ut etiam sit amet nisl purus. Aenean et tortor at risus viverra. Imperdiet dui accumsan sit amet.
                {/* <br />
              <br />
              Elementum pulvinar etiam non quam lacus suspendisse faucibus. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Nulla porttitor massa id neque aliquam vestibulum. */}
                <br />
                <br />
                Quis auctor elit sed vulputate mi sit amet mauris commodo. Ultrices sagittis orci a scelerisque purus semper eget.
                <br />
                <br />
                Quis auctor elit sed vulputate mi sit amet mauris commodo.
              </p>
              <figure className="signature">
                <img src={sig} alt="Laura Kirkham" />
              </figure>
            </div>
          </div>
          {/* <h1 className="welcomeHeading">Welcome to Plant Parenthood</h1> */}

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