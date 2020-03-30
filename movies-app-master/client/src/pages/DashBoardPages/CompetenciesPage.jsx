import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AppBar from "../components/AppBar.jsx";
import NoteTitleBar from "../components/NoteTitleBar.jsx";
import Tabs from "../components/Tabs.jsx";
// Overview pages
import Competencies_TopAreasOfExpertise from "./DashboardComponents/Competencies_TopAreasOfExpertise.jsx";
import Competencies_CurrentLevel from "./DashboardComponents/Competencies_CurrentLevel.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    //hard coded value
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
  pageTitlePosition:{
    marginTop: theme.spacing(3)
  }
}));

const MainTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "2rem",
  fontWeight: "bold"
});

const SecondaryTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "1.5rem",
  fontWeight: "bold"
});

const componentsStyle = {
  display: "flex"
};

export default function CompetenciesPage() {
  const classes = useStyles();

  return (
    <div>
      <AppBar></AppBar>
      <Grid style={componentsStyle}>
        <Tabs></Tabs>
        <Grid style={{ flex: 1 }}>
          <NoteTitleBar />
          <div className={classes.root}>
            <MainTypography className={classes.pageTitlePosition}>Competencies</MainTypography>
            {/* //start of first section */}
            <Paper className={classes.paper}>
              {/* //first part of first section */}
              <div className={classes.part1}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Competencies_CurrentLevel />
                </Grid>
              </div>
            </Paper>
            {/* start of second section */}
            <Paper className={classes.paper}>
              <div className={classes.part1}>
                <Grid container wrap="nowrap" spacing={2}>
                  <Competencies_TopAreasOfExpertise />
                </Grid>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
