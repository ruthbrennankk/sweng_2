import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuList, MenuItem, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import  NavigationBar  from './components/NavigationBar.jsx';
import  AppBar  from './components/AppBar.jsx';
import NoteTitleBar from './components/NoteTitleBar.jsx';
import Tabs from './components/Tabs.jsx';
import './ProfilePage.css';

//Import Graphs
import LineGraph from "./Graphs/LineGraph";
import BarChart from "./Graphs/BarChart";
import Doughnut from "./Graphs/Doughnut";

const componentsStyle = {
  display: 'flex',
};

class DashboardPage extends Component {
  state = {
    data: [65, 59, 80, 81, 56],
    labels: ["Jan", "Feb", "March","April", "May", "June"],
  }
  render() {
    return (
      <Grid>
        <AppBar></AppBar>
          <Grid style={componentsStyle}>
            <Tabs></Tabs>
            <Grid style={{flex: 1 }}>
              <NoteTitleBar/>
              <Grid>

                {/*----fill in screens here-----*/}

                Dashboard Page

                </Grid>
                <Doughnut
                  data = {this.state.data}
                  labels={this.state.labels} 
                />
                <BarChart
                  data = {this.state.data}
                  labels={this.state.labels} 
                />
                <LineGraph
                  data = {this.state.data}
                  labels={this.state.labels} 
                />
            </Grid>
          </Grid>
      </Grid>
    );
  }
}
export default DashboardPage;