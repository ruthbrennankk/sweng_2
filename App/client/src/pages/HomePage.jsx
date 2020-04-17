import React, { Component, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {AccountContext, AccountProvider} from '../api/AcntContext';

import  NavigationBar  from './components/NavigationBar.jsx';
import  AppBar  from './components/AppBar.jsx';
import NoteTitleBar from './components/NoteTitleBar.jsx';
import Tabs from './components/Tabs.jsx';
import './ProfilePage.css';

const componentsStyle = {
  display: 'flex',
};

class HomePage extends Component {
  render() {
    return (

      
       

        

      <Grid>
        <AppBar></AppBar>
          <Grid style={componentsStyle}>
            <Tabs></Tabs>
            <Grid style={{flex: 1 }}>
              <Grid>
               

                {/*----fill in screens here-----*/}

                Home Pages

                </Grid>
            </Grid>
          </Grid>
      </Grid>

    );
  }
}
export default HomePage;