//Vertical Bar Chart Class

//Graph Imports
import React, { Component } from 'react';
import Chart from "chart.js";

//import classes from "./LineGraph.module.css";

export default class Doughnut extends Component {
    chartRef = React.createRef();
    
   // var colours = ["", "#", "#", "#", "#"];
    
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        Chart.defaults.global.legend.display = false;
        
        new Chart(myChartRef, {
            type: "doughnut",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                      // turle greenn, pale orange, pale red, marigold, white
                      backgroundColor: [
                        '#75bf53',
                        '#fda54b',
                        '#e35245',
                        '#ffc400',
                        '#d9d9d9'
                    ],
                      hoverBackgroundColor: [
                      '#539435',
                      '#f2820f',
                      '#c44a3f',
                      '#e3b109',
                      '#918e8e'
                      ],
                      data: [65, 59, 80, 81, 56]
                    }
                  ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }],
                    yAxes: [{
                        ticks: { display: false },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }]
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
