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
          
<div>
{/* <p class="greetingCopy">Keep all your plant babies happy and healthy.</p> */}
</div>
            <div className="letter">
              {/* <h2 className="greeting">Plant parents,</h2> */}
            <h2 className="neon">#proudplantmom</h2>
              <p className="greetingCopy">
                {/* Plant Parenthood promotes a common sense approach to
                plant health and well-being.<br/><br/>Create a virtual greenhouse and add your plants by name. */}
              As your plant family grows, use the Plant Parenthood virtual nursery to
              remind you of each plants individual watering and nutrition
                needs.<br /><br /> With their care requirements at your finger tips,
                your urban jungle will be thriving in no time. Be a proud
                plant parent with Plant Parenthood!
              </p>
              {/* <figure className="signature">
                <img src={sig} alt="Laura Kirkham" />
              </figure> */}
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