import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import  NavigationBar  from './components/NavigationBar.jsx';

class ArticlesPage extends Component {
  render() {
    return (
      <div>
        Articles
        <NavigationBar/>
      </div>
    );
  }
}
export default ArticlesPage;