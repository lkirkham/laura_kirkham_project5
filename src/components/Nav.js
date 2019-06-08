//Plant Parenthood
import React, {Component } from 'react';
import googleSignIn from "../assets/btn_google_signin.png"
// import smoothscroll from 'smoothscroll-polyfill';
// kick off the polyfill!
// smoothscroll.polyfill();



class Nav extends Component {
  
  render(){
    return <nav className="mainNavigation">
        <ul>

          {this.props.user ? <li>
              <div className="addPlantBtn" onClick={e => {
                  this.props.openModal();
                }}>
                <i class="fas fa-plus" />
              </div>
            </li> : null}
          {this.props.user ? <li className="logOutBtn" onClick={this.props.logout}>
            <i className="fas fa-sign-out-alt" />
            </li> : <li className="logInBtn" onClick={this.props.login}>
              {/* <i className="fas fa-sign-in-alt" /> */}
              {/* &nbsp; */}
              {/* <i class="fab fa-google" /> */}
              <img className="googleBtn" src={googleSignIn} alt="Sign In With Google" />
              {/* <img src={googleLogo} className="google" alt="Google Logo" /> */}
              {/* <p className="text">Sign in with Google</p> */}
            </li>}
          {/* <li><div className="aboutBtn"><i class="fas fa-leaf"></i></div></li>
          <li><div className="logOutBtn"><i class="fas fa-sign-out-alt"></i></div></li> */}
        </ul>
      </nav>;
  }
} 


export default Nav


  
