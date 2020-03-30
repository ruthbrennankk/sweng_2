//Graph Imports
import React, { Component } from 'react';
import Chart from "chart.js";

//import classes from "./LineGraph.module.css";

/*
    displayLegend : Boolean 
    data : Integer Array 
    labels : String Array 
    borderColour : String formatted "#9545d8" 
    xAxisLabel : String eg 'Date'
    yAxisLabel : String eg 'Time'
    fill : Boolean
*/

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        Chart.defaults.global.legend.display = this.props.displayLengend;
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.props.labels,
                datasets: [
                    {
                        //label: "Sales",
                        data: this.props.data,
                        fill: this.props.fill,
                        borderColor: this.props.borderColour,//"#9545d8",  
                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                  padding: {
                      top: 25,
                      left: 15,
                      right: 15,
                      bottom: 25
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
