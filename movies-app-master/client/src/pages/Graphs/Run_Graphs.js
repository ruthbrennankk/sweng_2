//Run Graph Class
import React, { Component } from 'react';
import LineGraph from "./Graphs/LineGraph";
import BarChart from "./Graphs/BarChart";
import Doughnut from "./Graphs/Doughnut";


//import Chart from "chart.js";

export default class Dashboard extends Component {
    //Expects Data and Labels to be formatted like this
  state = {
      data: [65, 59, 80, 81, 56],
      labels: ["Jan", "Feb", "March","April", "May", "June"],
  }
  
    //Components to be laid out as such
  render() {
      return (
          <div>
          <header>
              <h1>Levels and Points Over Time</h1>
          </header>
          
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
          </div>
      )
  }
}