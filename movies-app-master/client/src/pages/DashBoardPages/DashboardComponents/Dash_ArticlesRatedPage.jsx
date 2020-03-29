import React from "react";
import { NavLink } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
// Overview pages
import Dash_ArticlesImpact from "./Dash_Articles_Impact.jsx";
import Dash_ArticlesRated from "./Dash_Articles_Rated.jsx";
import Button from "@material-ui/core/Button";

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

export default function Dash_ArticlesRatedPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <MainTypography className={classes.pageTitlePosition}>
          Articles Rated
        </MainTypography>
        <NavLink
          to
          to="/dashboard/articlesCreated"
          style={{ textDecoration: "none" }}
        >
          <StyledButton>Articles Created</StyledButton>
        </NavLink>
      </Grid>
      {/* //start of first section */}
      <Paper className={classes.paper}>
        <SecondaryTypography gutterBottom>
          Articles you rated
        </SecondaryTypography>
        <div className={classes.part1}>
          <Grid container wrap="nowrap" spacing={2}>
            <Dash_ArticlesRated />
          </Grid>
        </div>
        <Divider />
        <div className={classes.part2}>
          <Grid container wrap="nowrap" spacing={2}>
            <Dash_ArticlesImpact />
          </Grid>
        </div>
      </Paper>
    </div>
  );
}
