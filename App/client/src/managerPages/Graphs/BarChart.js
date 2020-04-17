//Vertical Bar Chart Class

//Graph Imports
import React, { Component } from 'react';
import Chart from "chart.js";

//import classes from "./LineGraph.module.css";

/*
    displayLegend : Boolean 
    data : Integer Array 
    labels : String Array 
    borderColour : String formatted "#9545d8" 
    backgroundColour : String formatted as above
    xAxisLabel : String eg 'Date'
    yAxisLabel : String eg 'Time'
*/

export default class BarChart extends Component {
    chartRef = React.createRef();
    
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        Chart.defaults.global.legend.display = this.props.displayLegend;
        
        new Chart(myChartRef, {
            type: "horizontalBar",
            data: {
                //Bring in data
                labels: this.props.labels,
                datasets: [
                    {
                        //label: "Sales",
                        data: this.props.data,
                        //fill: "#e5d8f0",
                        borderColor: this.props.borderColour,
                        backgroundColor: this.props.backgroundColour,
                        

                        
                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                  padding: {
                      top: 5,
                      left: 15,
                      right: 15,
                      bottom: 15
                  }
                },
                scales: {
                  yAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: this.props.yAxisLabel
                    }
                  }],
                  xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: this.props.xAxisLabel
                    }
                  }],
                } 
                
                
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
