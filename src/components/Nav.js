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
          <li><button onClick={(e) => {
								this.props.openModal();
              }}
                >
              Add</button></li>
          <li><button>Instructions</button></li>
          <li><button>Logout</button></li>
        </ul>
      </nav>

    )
  }
}


export default Nav


  
