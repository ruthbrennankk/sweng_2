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
  currentLevel: {
    width: "fit-content",

    "& svg": {
      margin: theme.spacing(1.5)
    },
    "& hr": {
      margin: theme.spacing(0, 5)
    }
  }
}));

export default function Competencies_CurrentLevel() {
  const classes = useStyles();
  var graph = {
    data: [65, 59, 80, 81, 56, 300],
    labels: ["Jan", "Feb", "March", "April", "May", "June"]
  };
  return (
    <Grid item xs>
      <Grid container alignItems="stretch" className={classes.currentLevel}>
        <Typography
          className={classes.typographyColor}
          variant="h6"
          gutterBottom
        >
          You current level
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography
          className={classes.typographyColor}
          variant="subtitle2"
          gutterBottom
        >
          Your Top 5 Areas of Expertise - Levels
        </Typography>
        {/*Levels Stuff Here*/}
      </Grid>
    </Grid>
  );
}
