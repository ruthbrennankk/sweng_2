//Graph Imports
import React, { Component } from 'react';
import Chart from "chart.js";

//import classes from "./LineGraph.module.css";

export default class LineGraph extends Component {
    chartRef = React.createRef();
    
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        Chart.defaults.global.legend.display = false;
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.props.labels,
                datasets: [
                    {
                        //label: "Sales",
                        data: this.props.data,
                        //fill: "#e5d8f0",
                        borderColor: "#9545d8",
                        

                        
                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
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
                      labelString: 'Level and Points'
                    }
                  }],
                  xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Date'
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
