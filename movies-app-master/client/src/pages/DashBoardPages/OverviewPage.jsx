import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, styled } from "@material-ui/core/styles";
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(5)
  },
  typographyColor: {
    color: "#48236a"
  },
  part1: {
    marginBottom: theme.spacing(5)
  },
  part2: {
    marginTop: theme.spacing(5)
  },
  pageTitlePosition: {
    marginTop: theme.spacing(3)
  }
}));

const ImpactTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "2rem",
  fontWeight: "bold"
});

export default function OverviewPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImpactTypography className={classes.pageTitlePosition}>
        Overview
      </ImpactTypography>
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
