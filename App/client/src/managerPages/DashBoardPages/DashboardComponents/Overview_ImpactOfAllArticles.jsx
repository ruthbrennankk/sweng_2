import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import BarChart from "../../Graphs/BarChart";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  }
}));

const ArticleComponentsTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "2rem"
});

export default function Dash_ArticlesCreated_ListOfARticles() {
  const classes = useStyles();
  var graph = {
    data: [65, 59, 80, 81, 56, 300],
    labels: ["Jan", "Feb", "March", "April", "May", "June"]
  };

  return (
    <Grid container direction="column" xs spacing={1}>
      <Typography className={classes.typographyColor} variant="h6" gutterBottom>
        Impact of all articles created
      </Typography>
      <Typography>
        Some of the people who stated that the articles solved their problem
        gave the folllowing feedback.
      </Typography>
      <BarChart
        displayLegend={false}
        data={[19, 35, 22]}
        labels={["Too basic", "Easy to comprehend", "Too hard to understand"]}
        borderColour={"#fda54b"}
        xAxisLabel={""}
        yAxisLabel={"Comprehension"}
        backgroundColour={"#9545d8"}
      />

      <BarChart
        displayLegend={false}
        data={[30, 16, 14]}
        labels={["Not enough detail", "Right amount of detail", "Too much detial" ]}
        borderColour={"#fda54b"}
        xAxisLabel={""}
        yAxisLabel={"Detail"}
        backgroundColour={"#9545d8"}
      />

      <BarChart
        displayLegend={false}
        data={[30, 30, 26]}
        labels={["Confusing", "Straight forward", "Too segmented"]}
        borderColour={"#fda54b"}
        xAxisLabel={""}
        yAxisLabel={"Structure"}
        backgroundColour={"#9545d8"}
      />

      <BarChart
        displayLegend={false}
        data={[28, 26, 20]}
        labels={["Too short", "Just Right", "Too long"]}
        borderColour={"#fda54b"}
        xAxisLabel={"Articles"}
        yAxisLabel={"Length"}
        backgroundColour={"#9545d8"}
      />
    </Grid>
  );
}
