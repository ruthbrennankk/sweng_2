import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
//import {AccountContext } from '../api/AcntContext';

import NavigationBar from './components/NavigationBar.jsx';
import  AppBar  from './components/AppBar.jsx';
import NoteTitleBar from './components/NoteTitleBar.jsx';
import Tabs from './components/Tabs.jsx';
import './ProfilePage.css';
import {AccountContext, AccountProvider} from '../api/AcntContext';

var testuser;
const testPoints = 0;
var LoggedinUser;
// function AssignContextValue(){
//    [state, setState] = useContext(AccountContext);
//   LoggedinUser = state;
//   return LoggedinUser;
// }




const componentsStyle = {
    display: 'flex',
  };


class ProfilePage extends Component {

    render() {
        return (
            <Grid>
            <AppBar></AppBar>
              <Grid style={componentsStyle}>
                <Tabs></Tabs>
                <Grid style={{flex: 1 }}>
                  <NoteTitleBar/>
                  
                  <Grid>
                  <AccountContext.Consumer>
                    {user => (
                      <h3>Hello Again, {user[0].name}</h3>
                    )}
                  
    
                   


                    </AccountContext.Consumer>
                    </Grid>
                  
                </Grid>
              </Grid>
          </Grid>
        );
    }
}
export default ProfilePage;