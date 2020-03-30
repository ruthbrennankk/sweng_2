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

const levelsAndPointsOverTime = `Points over time`;

export default function Overview_LevelsAndPointsOvertime() {
  const classes = useStyles();
  var graph = {
    data: [54, 300, 1667, 735],
    labels: ["Jan", "Feb", "March", "April"]
  };
  return (
    <Grid item xs>
      <Typography className={classes.typographyColor} variant="subtitle2">
        {levelsAndPointsOverTime}
      </Typography>
      <LineGraph
            data={graph.data}
            labels={graph.labels}
            displayLengend={false}
            borderColour={"#9545d8"}
            xAxisLabel={"Date"}
            yAxisLabel={"Points"}
            fill={true}
          />
    </Grid>
  );
}
