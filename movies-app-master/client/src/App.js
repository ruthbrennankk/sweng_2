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

//Graph Imports



import Chart from "chart.js";
//import classes from "./LineGraph.module.css";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
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