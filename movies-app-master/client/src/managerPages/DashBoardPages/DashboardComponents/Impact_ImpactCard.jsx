import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  typographyColor: {
    color: "#48236a"
  }
});

const StyledButton = withStyles({
  root: {
    marginLeft: "170px",
    background: "linear-gradient(45deg, #5a2a83 30%, #9545d8 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 20px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default function Impact_ImpactCard() {
  const classes = useStyles();
  return (
    <Grid item xs container direction="row" spacing={2}>
      
      {/* first column */}
      {/* first column */}
      {/* first column */}
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs container direction="row" spacing={2}>
          <Typography
            className={classes.typographyColor}
            variant="h6"
            gutterBottom
          >
            Top 10 Articles
          </Typography>
          

          <Typography
            className={classes.typographyColor}
            variant="body1"
            gutterBottom
          >
            - solved a problem
          </Typography>
          
          <NavLink to to="/" style={{ textDecoration: "none" }}>
            <StyledButton>
              
              <VisibilityOutlinedIcon /> View Full List
            </StyledButton>
          </NavLink>
          
        </Grid>
        
        {/* continue code for first column here */}
        {/* continue code for first column here */}
        {/* continue code for first column here */}
      </Grid>

      {/* second column */}
      {/* second column */}
      {/* second column */}

      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs container direction="row" spacing={2}>
          <Typography
            className={classes.typographyColor}
            variant="h6"
            gutterBottom
          >
            Top 10 Articles
          </Typography>

          <Typography
            className={classes.typographyColor}
            variant="body1"
            gutterBottom
          >
            - Partially solved a problem
          </Typography>
          <NavLink to to="/" style={{ textDecoration: "none" }}>
            <StyledButton>
              <VisibilityOutlinedIcon /> View Full List
            </StyledButton>
          </NavLink>
        </Grid>
        {/* continue code for second column here */}
        {/* continue code for second column here */}
        {/* continue code for second column here */}
      </Grid>
    </Grid>
  );
}
