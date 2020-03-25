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


class App extends Component {
  render() {
    var myBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
    data: {
      datasets: [{
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70]
      }]
  };
    return (
      <div>
        <header>
          <h1 className="App-title" >Graphs Testing</h1>
        </header>
      </div>
    );
  }
}

export default App;

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