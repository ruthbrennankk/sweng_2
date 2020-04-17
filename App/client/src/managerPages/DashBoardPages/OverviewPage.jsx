import React from "react";
import { NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Overview pages
import Overview_MontlhyArticles from "./DashboardComponents/Overview_MontlhyArticles.jsx";
import Overview_MonthlyViews from "./DashboardComponents/Overview_MonthlyViews.jsx";
import Overview_ImpactOfAllArticles from "./DashboardComponents/Overview_ImpactOfAllArticles.jsx";
import Overview_ArticlesAndUsers from "./DashboardComponents/Overview_ArticlesAndUsers.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper1: {
    //hard coded value
    width: theme.spacing(80),
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(5)
  },
  paper2: {
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(5)
  },
  paper3: {
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(5)
  },
  paper4: {
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

const ArticleComponentsTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "2rem"
});

const PeriodTypography = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "bold"
});

const componentsStyle = {
  display: "flex"
};

export default function Dash_ArticlesCreated() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <MainTypography className={classes.pageTitlePosition}>
            Articles Created
          </MainTypography>
        </Grid>
        <Paper className={classes.paper1}>
          <Overview_MontlhyArticles />
        </Paper>
        <Paper className={classes.paper1}>
          <Overview_MonthlyViews />
        </Paper>
      </Grid>
      <Grid className={classes.root}>
        <Paper className={classes.paper2}>
          <Overview_ImpactOfAllArticles />
        </Paper>
      </Grid>
      <Grid className={classes.root}>
        <Paper className={classes.paper3}>
          <Overview_ArticlesAndUsers />
        </Paper>
      </Grid>
    </div>
  );
}
