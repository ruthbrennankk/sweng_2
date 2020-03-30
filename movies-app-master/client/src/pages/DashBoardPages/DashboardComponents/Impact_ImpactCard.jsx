import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import BarChart from "../../Graphs/BarChart";

const useStyles = makeStyles({
  typographyColor: {
    color: "#48236a"
  },
  
});

export default function Impact_ImpactCard() {
  const classes = useStyles();
  return (
    <Grid item xs>
      <Grid container alignItems="stretch" className={classes.currentLevel}>
        <Typography
          className={classes.typographyColor}
          variant="h6"
          gutterBottom
        >
          Impact of the articles created by you
        </Typography>
      </Grid>
      <Typography className={classes.pointsTypographyColor} variant="body1">
        Some of the people that stated that your articles partically solved 
        gave the following feedback
      </Typography>
      <Grid>
        
      </Grid>
      <BarChart
                  displayLegend = {false} 
                  data = {[65, 59, 80, 81]}
                  labels={["Jan", "Feb", "March","April"]} 
                  borderColour =  {"#9545d8"}
                  xAxisLabel = {'Date'}
                  yAxisLabel = {'Level and Points'}
                  backgroundColour = {'#9545d8'}
              />
        <BarChart
                  displayLegend = {false} 
                  data = {[65, 59, 80, 81]}
                  labels={["Jan", "Feb", "March","April"]} 
                  borderColour =  {"#9545d8"}
                  xAxisLabel = {'Date'}
                  yAxisLabel = {'Level and Points'}
                  backgroundColour = {'#9545d8'}
        />
        <BarChart
                  displayLegend = {false} 
                  data = {[65, 59, 80, 81]}
                  labels={["Jan", "Feb", "March","April"]} 
                  borderColour =  {"#9545d8"}
                  xAxisLabel = {'Date'}
                  yAxisLabel = {'Level and Points'}
                  backgroundColour = {'#9545d8'}
        />
    </Grid>
  );
}
