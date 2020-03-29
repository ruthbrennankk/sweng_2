import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage.jsx';
import SignInPage from './pages/SignInPage.js';

import Login from './pages/Login.js';
import {AccountProvider} from './api/AcntContext';

import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ArticlesPage from './pages/ArticlesPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';


//import './App.css';
/*export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      
    localStorage.setItem("user", JSON.stringify(action.payload.user));
    localStorage.setItem("token", JSON.stringify(action.payload.token));
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
      token: action.payload.token
    };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
      default:
        return state;

  }
};*/



export default class Dashboard extends Component {
  
  render() {
    return (
      <Router>
        <AccountProvider>
          
        

        <Route exact path="/" component={WelcomePage}>
        </Route>
        <Route exact path="/signin" component={Login}>
           {/* Need to be able to not allow further movement if not signed in*/ }
        </Route>
        <Route exact path="/home" component={HomePage}>
        </Route>
        <Route exact path="/dashboard" component={DashboardPage}>
        </Route>
        <Route exact path="/articles" component={ArticlesPage}>
        </Route>
        <Route exact path="/profile" component={ProfilePage}>
        </Route>
        <Route exact path="/settings" component={SettingsPage}>
        </Route>

        </AccountProvider>
        

      </Router>
    );
  }
}

