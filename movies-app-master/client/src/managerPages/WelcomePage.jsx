import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { styled, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const MainTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "1.5rem",
  fontWeight: "bold"
});

const SecondaryTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "1rem",
  fontWeight: "bold"
});

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #5a2a83 30%, #9545d8 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 50px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

class WelcomePage extends Component {
  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <MainTypography>Welcome Back</MainTypography>
        <SecondaryTypography gutterBottom>
          What's on your mind?
        </SecondaryTypography>
        <NavLink to="/signin" style={{ textDecoration: "none" }}>
          <StyledButton>Continue</StyledButton>
        </NavLink>
      </Grid>
    );
  }
}

export default WelcomePage;
