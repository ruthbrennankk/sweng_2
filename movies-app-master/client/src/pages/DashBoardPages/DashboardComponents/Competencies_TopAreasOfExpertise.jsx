import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LineGraph from "../../Graphs/LineGraph";

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
      <LineGraph
        data={graph.data}
        labels={graph.labels}
        displayLengend={false}
        borderColour={"#9545d8"}
        xAxisLabel={"Date"}
        yAxisLabel={"Level and Points"}
        fill={true}
      />
    </Grid>
  );
}
