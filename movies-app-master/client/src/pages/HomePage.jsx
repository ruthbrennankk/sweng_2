import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import  NavigationBar  from './components/NavigationBar.jsx';

class HomePage extends Component {
  render() {
    return (
      <div>
        Home Page
        <NavigationBar/>
      </div>
    );
  }
}
export default HomePage;