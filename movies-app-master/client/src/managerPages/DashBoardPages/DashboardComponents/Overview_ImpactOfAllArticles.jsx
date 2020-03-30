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
            data={[65, 59, 80, 81]}
            labels={["Jan", "Feb", "March", "April"]}
            borderColour={"#fda54b"}
            xAxisLabel={"Date"}
            yAxisLabel={"Level and Points"}
            backgroundColour={"#fda54b"}
          />
    </Grid>
  );
}
