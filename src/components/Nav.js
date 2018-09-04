//Plant Parenthood
import React, {Component } from 'react';
// import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
// smoothscroll.polyfill();

class Nav extends Component {
  
  render(){
    return(
      <nav className="mainNavigation">
        <ul>
          <li><div className="addPlantBtn" onClick={(e) => {
								this.props.openModal();
              }}
                >
              <i class="fas fa-plus"></i></div></li>
          <li><div className="aboutBtn"><i class="fas fa-leaf"></i></div></li>
          <li><div className="logOutBtn"><i class="fas fa-sign-out-alt"></i></div></li>
        </ul>
      </nav>

    )
  }
} 


export default Nav


  
