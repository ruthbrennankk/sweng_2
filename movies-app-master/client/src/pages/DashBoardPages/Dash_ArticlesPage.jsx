import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import AppBar from "../components/AppBar.jsx";
import NoteTitleBar from "../components/NoteTitleBar.jsx";
import Tabs from "../components/Tabs.jsx";
// Overview pages
import Dash_ArticlesImpact from "./DashboardComponents/Dash_Articles_Impact.jsx";
import Dash_ArticlesRated from "./DashboardComponents/Dash_Articles_Rated.jsx";

import Dash_ArticlesRatedPage from "./DashboardComponents/Dash_ArticlesRatedPage.jsx";
import Dash_ArticlesCreated from "./DashboardComponents/Dash_ArticlesCreated.jsx";

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

const MainTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "2rem",
  fontWeight: "bold"
});

const componentsStyle = {
  display: "flex"
};

export default function Dash_ArticlesPage() {
  const classes = useStyles();

  return (
    <div>
      <AppBar></AppBar>
      <Grid style={componentsStyle}>
        <Tabs></Tabs>
        <Grid style={{ flex: 1 }}>
          <NoteTitleBar />
          <Dash_ArticlesRatedPage />
        </Grid>
      </Grid>
    </div>
  );
}
