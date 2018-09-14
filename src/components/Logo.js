

//Plant Parenthood
import React, { Component } from 'react';
import pplogo from "../assets/pplogo.png";

class Logo extends Component {



  render() {
    return (
      <section className="logoSection">
        <figure className="logoContainer">
          <img src={pplogo} className="AppLogo" alt="logo" />
        </figure>
      </section>
    )
  }
}

export default Logo;