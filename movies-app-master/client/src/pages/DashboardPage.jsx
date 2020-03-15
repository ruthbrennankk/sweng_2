import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import  NavigationBar  from './components/NavigationBar.jsx';

class DashboardPage extends Component {
  render() {
    return (
      <div>
        Dashboard
        <NavigationBar/>
      </div>
    );
  }
}
export default DashboardPage;