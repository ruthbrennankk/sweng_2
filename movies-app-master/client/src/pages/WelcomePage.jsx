import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './WelcomePage.css';

class WelcomePage extends Component {
  render() {
    return (
      <div className="App">
      <div className="App__Left">
      <div className="Welcome_Page">
        <div className="Welcome__Text"> Welcome Back</div>
        <div>What's on your mind?</div>
        <NavLink to="/signin">
          <button className="Welcome__Button mr-20">Continue</button>
        </NavLink>
      </div>
      </div>
      </div>
    );
  }
}

export default WelcomePage;
