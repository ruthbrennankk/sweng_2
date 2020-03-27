import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  }
}));

const levelsAndPointsOverTime = `Levels and points over time`;

export default function Overview_LevelsAndPointsOvertime() {
  const classes = useStyles();

  return (
    <Grid item xs>
      <Typography className={classes.typographyColor} variant="subtitle2">
        {levelsAndPointsOverTime}
      </Typography>
    </Grid>
  );
}
