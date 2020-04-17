import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AppBar from "../components/AppBar.jsx";
import NoteTitleBar from "../components/NoteTitleBar.jsx";
import Tabs from "../components/Tabs.jsx";
import Button from "@material-ui/core/Button";

import Dash_ArticlesCreated_ListOfARticles from "./DashboardComponents/Dash_ArticlesCreated_ListOfArticles.jsx";
import Dash_ArticlesCreated_ArticlesInReview from "./DashboardComponents/Dash_ArticlesCreated_ArticlesInReview.jsx";
import Ranking_MonthlyCreated from "./DashboardComponents/Ranking_MonthlyCreated.jsx";
import Ranking_MonthlyRated from "./DashboardComponents/Ranking_MonthlyRated.jsx";
import Ranking_Contributors from "./DashboardComponents/Ranking_Contributors.jsx";
import Ranking_RankingContributors from "./DashboardComponents/Ranking_RankingContributors.jsx";

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

const StyledButton = withStyles({
  root: {
    //hardcoded code
    marginTop: "23px",
    background: "linear-gradient(45deg, #5a2a83 30%, #9545d8 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default function Dash_ArticlesPage() {
  const classes = useStyles();

  return (
    <div>
      <AppBar></AppBar>
      <Grid style={componentsStyle}>
        <Tabs></Tabs>
        <Grid style={{ flex: 1 }}>
          <NoteTitleBar />
          <Grid container className={classes.root}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <MainTypography className={classes.pageTitlePosition}>
                Ranking
              </MainTypography>
            </Grid>
            <Paper className={classes.paper1}>
              <Ranking_MonthlyCreated />
            </Paper>
            <Paper className={classes.paper1}>
              <Ranking_MonthlyRated />
            </Paper>
          </Grid>
          <Grid className={classes.root}>
            <Paper className={classes.paper2}>
              <Ranking_Contributors />
            </Paper>
          </Grid>

          <Grid className={classes.root}>
            <Paper className={classes.paper4}>
              <Ranking_RankingContributors />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
