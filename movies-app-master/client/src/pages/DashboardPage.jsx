import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import  NavigationBar  from './components/NavigationBar.jsx';
import  AppBar  from './components/AppBar.jsx';
import './ProfilePage.css';

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <AppBar></AppBar>
        <div>
          <NavigationBar/>
          <div className="ProfileDetails">Dashboard </div>
        </div>
      </div>
    );
  }
}
export default DashboardPage;