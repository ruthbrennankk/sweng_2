import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BarChart from "../../Graphs/BarChart";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  }
}));

const topAreasOfExpertise = `Top 5 Areas of Expertise - Combined Score`;

export default function Competencies_TopAreasOfExpertise() {
  const classes = useStyles();
  var graph = {
    data: [65, 59, 80, 81, 56, 300],
    labels: ["Jan", "Feb", "March", "April", "May", "June"]
  };
  return (
    <Grid item xs>
      <Typography className={classes.typographyColor} variant="h6" gutterBottom>
        {topAreasOfExpertise}
      </Typography>
      <BarChart
          displayLegend = {false} 
          data = {[80, 77, 55, 30,20,10]}
          labels={["Follow-up lab results", "Perform labratory investigations", "Calibrate labratory equipment","Perform product testing", "Prepare samples for testing"]} 
          borderColour =  {"#fda54b"}
          xAxisLabel = {'Points'}
          yAxisLabel = {'Area'}
          backgroundColour = {'#fda54b'}
      />
    </Grid>
  );
}
