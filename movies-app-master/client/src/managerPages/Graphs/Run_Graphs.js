//Run Graph Class
import React, { Component } from 'react';
import LineGraph from "./Graphs/LineGraph";
import BarChart from "./Graphs/BarChart";
import Doughnut from "./Graphs/Doughnut";


//import Chart from "chart.js";

/*
    Line Graph Props expects this

        displayLegend : Boolean 
        data : Integer Array 
        labels : String Array 
        borderColour : String formatted "#9545d8" 
        xAxisLabel : String eg 'Date'
        yAxisLabel : String eg 'Time'
*/

/*
    Doughnut Chart

    backgroundColor : String Array eg [ '#75bf53', '#fda54b','#e35245','#ffc400','#d9d9d9']
    hoverBackgroundColor : String Array eg ['#539435', '#f2820f','#c44a3f', '#e3b109','#918e8e']
    displayLegend : Boolean 
*/

/*
    Bar Chart

    displayLegend : Boolean 
    data : Integer Array 
    labels : String Array 
    borderColour : String formatted "#9545d8" 
    backgroundColour : String formatted as above
    xAxisLabel : String eg 'Date'
    yAxisLabel : String eg 'Time'
*/

export default class Dashboard extends Component {
    //Expects Data and Labels to be formatted like this
  
    //These are the Graph components, it takes these parameters so that the data and labels are correct
    //It expects data to be an array of int and labels to be an array of Strings
  render() {
      return (
          <div>
          <header>
              <h1>Levels and Points Over Time</h1>
          </header>
                
            <Doughnut
                  data = {[65, 59, 80, 81]}
                  labels={["Jan", "Feb", "March","April"]} 
                  backgroundColor = {[ '#75bf53', '#fda54b','#e35245','#ffc400','#d9d9d9']}
                  hoverBackgroundColor = { ['#539435', '#f2820f','#c44a3f', '#e3b109','#918e8e']}
                  displayLegend = {true}
            />
              <BarChart
                  displayLegend = {false} 
                  data = {[65, 59, 80, 81]}
                  labels={["Jan", "Feb", "March","April"]} 
                  borderColour =  {"#9545d8"}
                  xAxisLabel = {'Date'}
                  yAxisLabel = {'Level and Points'}
                  backgroundColour = {'#539435'}
              />
              <LineGraph
                    data = {[65, 59, 80, 81, 56]}
                    labels={["Jan", "Feb", "March","April", "May", "June"]}
                    displayLengend = {false}
                    borderColour =  {"#9545d8"}
                    xAxisLabel = {'Date'}
                    yAxisLabel = {'Level and Points'}
                    fill = {true}
                />
          </div>
      )
  }
}