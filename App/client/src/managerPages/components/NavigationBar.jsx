import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      <div className = "NavigationBG">
        <MenuList color="#ffffff">
          <MenuItem component={Link} to="/home">
            Home</MenuItem>
          <MenuItem component={Link} to="/dashboard">
            Dashboard</MenuItem>
          <MenuItem component={Link} to="/articles">
            Articles</MenuItem>
            <MenuItem component={Link} to="/profile">
            Profile</MenuItem>
        </MenuList>
      </div>
    );
  }
}
export default NavigationBar;