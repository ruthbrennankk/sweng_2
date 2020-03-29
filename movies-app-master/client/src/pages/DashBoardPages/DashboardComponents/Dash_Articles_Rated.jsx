import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import LineGraph from "../../Graphs/LineGraph";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  },
  contributionOvertime: {
    width: "fit-content",

    "& svg": {
      margin: theme.spacing(1.5)
    },
    "& hr": {
      margin: theme.spacing(0, 5)
    }
  }
}));

const articlesRated = `Articles Rated`;

export default function Overview_Contribution() {
  const classes = useStyles();
  var graph = {
    data: [65, 59, 80, 81, 56, 300],
    labels: ["Jan", "Feb", "March", "April", "May", "June"]
  };
  return (
    <Grid item xs>
      <Typography
        className={classes.typographyColor}
        variant="subtitle2"
        gutterBottom
      >
        {articlesRated}
      </Typography>
      <LineGraph
        data={graph.data}
        labels={graph.labels}
        displayLengend={false}
        borderColour={"#9545d8"}
        xAxisLabel={"Date"}
        yAxisLabel={"Contributions"}
        fill={true}
        
      />
      <Grid
        container
        alignItems="stretch"
        className={classes.contributionOvertime}
      ></Grid>
    </Grid>
  );
}
