import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Button from "@material-ui/core/Button";

import BarChart from "../../Graphs/BarChart";

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

export default function Competencies_CurrentLevel() {
  var graph = {
    data: [65, 59, 80, 81, 56, 300],
    labels: ["Jan", "Feb", "March", "April", "May", "June"]
  };
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
            Number of articles to contain a specific expert area{" "}
          </Typography>
        </Grid>
        {/* continue code for first column here */}
        {/* continue code for first column here */}
        {/* continue code for first column here */}
        <BarChart
          displayLegend={false}
          data={[65, 59, 80, 81]}
          labels={["Jan", "Feb", "March", "April"]}
          borderColour={"#fda54b"}
          xAxisLabel={"Date"}
          yAxisLabel={"Level and Points"}
          backgroundColour={"#fda54b"}
        />
        <NavLink to to="/" style={{ textDecoration: "none" }}>
          <StyledButton>+ Load More</StyledButton>
        </NavLink>
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
            Compentancies for
          </Typography>
        </Grid>
        {/* continue code for second column here */}
        {/* continue code for second column here */}
        {/* continue code for second column here */}
        <BarChart
          displayLegend={false}
          data={[65, 59, 80, 81]}
          labels={["Jan", "Feb", "March", "April"]}
          borderColour={"#fda54b"}
          xAxisLabel={"Date"}
          yAxisLabel={"Level and Points"}
          backgroundColour={"#fda54b"}
        />
      </Grid>
    </Grid>
  );
}
