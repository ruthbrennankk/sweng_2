import React, { Component } from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import NoImpact from "./DashboardComponents/Impact_NoImpactCard.jsx";
import Impact from "./DashboardComponents/Impact_ImpactCard.jsx";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";
import AppBar from "../components/AppBar.jsx";
import NoteTitleBar from "../components/NoteTitleBar.jsx";
import Tabs from "../components/Tabs.jsx";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    //hard coded value
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

const componentsStyle = {
  display: "flex"
};

export default function ImpactPage() {
  const classes = useStyles();
  //if false noImpact card is displayed. otherwise stats are displayed
  const hasArticles = true;
  return (
    <div>
      <AppBar></AppBar>
      <Grid style={componentsStyle}>
        <Tabs></Tabs>
        <Grid style={{ flex: 1 }}>
          <NoteTitleBar />
          <div className={classes.root}>
            <ImpactTypography className={classes.pageTitlePosition}>
              Impact
            </ImpactTypography>
            <Paper className={classes.paper}>
              <div className={classes.part1}>
                {hasArticles ? <Impact /> : <Impact />}
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
