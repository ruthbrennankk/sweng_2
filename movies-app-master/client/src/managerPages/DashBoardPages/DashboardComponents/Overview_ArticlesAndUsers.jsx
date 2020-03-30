import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import LineGraph from "../../Graphs/LineGraph";
import BarChart from "../../Graphs/BarChart";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  },
  part2: {
    marginTop: theme.spacing(5)
  },
  part3: {
    marginLeft: theme.spacing(10)
  }
}));

export default function Overview_ArticlesAndUsers() {
  const classes = useStyles();
  var graph = {
    data: [65, 59, 80, 81, 56, 300],
    labels: ["Jan", "Feb", "March", "April", "May", "June"]
  };
  return (
    <Grid item xs container direction="column" spacing={2}>
      <Typography className={classes.typographyColor} variant="h6" gutterBottom>
        Overview of all articles in the system
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
      <Divider />

      <Grid
        item
        xs
        container
        direction="row"
        spacing={2}
        className={classes.part2}
      >
        <Grid
          item
          xs
          container
          direction="column"
          spacing={2}
        >
          <Typography
            className={classes.typographyColor}
            variant="h6"
            gutterBottom
          >
            List of users and their contributions
          </Typography>
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
        <Grid
          item
          xs
          container
          direction="row"
          spacing={2}
          className={classes.part3}
        >
          <Grid item xs container direction="column" spacing={2}>
            <Typography
              className={classes.typographyColor}
              variant="h6"
              gutterBottom
            >
              List of users and the number of articels they created
            </Typography>
            <BarChart
              displayLegend={false}
              data={[65, 59, 80, 81]}
              labels={["Jan", "Feb", "March", "April"]}
              borderColour={"#fda54b"}
              xAxisLabel={"Date"}
              yAxisLabel={"Level and Points"}
              backgroundColour={"#fda54b"}
            />
            <Divider />
            <Typography
              className={classes.typographyColor}
              variant="h6"
              gutterBottom
            >
              List of users and the number of articels they rated
            </Typography>
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
      </Grid>
    </Grid>
  );
}
