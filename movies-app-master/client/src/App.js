import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage.jsx';
import SignInPage from './pages/SignInPage.js';
import HomePage from './pages/HomePage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import ArticlesPage from './pages/ArticlesPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

import LineGraph from "./Graphs/LineGraph";


import Chart from "chart.js";
//import classes from "./LineGraph.module.css";

export default class Dashboard extends Component {
  state = {
      //data: managerData,
      //labels: yearLabels
  }

  render() {
     // const { data, labels } = this.state;
      return (
          <div>
          <header>
              <h1>Levels and Points Over Time</h1>
          </header>
              <LineGraph
                  //data={data}
                  //labels={labels} 
              />
          </div>
      )
  }
}

/*render() {
    return (
      <Router>
        <Route exact path="/" component={WelcomePage}>
        </Route>
        <Route exact path="/signin" component={SignInPage}>
        </Route>
        <Route exact path="/home" component={HomePage}>
        </Route>
        <Route exact path="/dashboard" component={DashboardPage}>
        </Route>
        <Route exact path="/articles" component={ArticlesPage}>
        </Route>
        <Route exact path="/profile" component={ProfilePage}>
        </Route>
      </Router>
    );
  }*/