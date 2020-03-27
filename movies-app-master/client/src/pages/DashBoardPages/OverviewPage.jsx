import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// Overview pages
import Points from "./DashboardComponents/Overview_Points.jsx";
import ArticlesCreated from "./DashboardComponents/Overview_ArticlesCreated.jsx";
import ArticlesViewed from "./DashboardComponents/Overview_ArticlesViewed.jsx";
import ArticlesImpact from "./DashboardComponents/Overview_ArticlesImpact.jsx";
import ArticlesRated from "./DashboardComponents/Overview_ArticlesRated.jsx";
import Overview_LevelsAndPointsOvertime from "./DashboardComponents/Overview_LevelsAndPointsOvertime.jsx";
import Overview_Contribution from "./DashboardComponents/Overview_Contribution.jsx";
//Graphs 
import LineGraph from "./../Graphs/LineGraph";
import BarChart from "./../Graphs/BarChart";
import Doughnut from "./../Graphs/Doughnut";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 1080,
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(10)
  },
  typographyColor: {
    color: "#48236a"
  },
  part1: {
    marginBottom: theme.spacing(5)
  },
  part2: {
    marginTop: theme.spacing(5)
  }
}));

export default function OverviewPage() {
  const classes = useStyles();
  var graph = {
    data: [65, 59, 80, 81, 56],
    labels: ["Jan", "Feb", "March","April", "May", "June"],
  }

  return (
    <div className={classes.root}>
      {/* //start of first section */}
      <Paper className={classes.paper}>
        {/* //first part of first section */}
        <div className={classes.part1}>
          <Grid container wrap="nowrap" spacing={10}>
            <Points />
            <ArticlesCreated />
            <ArticlesViewed />
          </Grid>
        </div>

        <Divider />

        {/* second part of first section */}
        <div className={classes.part2}>
          <Grid container wrap="nowrap" spacing={10}>
            <ArticlesImpact />
            <ArticlesRated />
            <Doughnut
                  data = {graph.data}
                  labels={graph.labels} 
              />
          </Grid>
        </div>
      </Paper>
      {/* start of second section */}
      <Paper className={classes.paper}>
        <div className={classes.part1}>
          <Grid container wrap="nowrap" spacing={2}>
            <Overview_LevelsAndPointsOvertime />
          </Grid>
        </div>

        <Divider />
        <div className={classes.part2}>
          <Grid container wrap="nowrap" spacing={2}>
            <Overview_Contribution />
          </Grid>
        </div>
      </Paper>
    </div>
  );
}
