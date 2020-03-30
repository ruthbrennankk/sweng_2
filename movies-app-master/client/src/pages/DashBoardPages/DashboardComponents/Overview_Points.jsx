import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import levelZero from "../../Images/levelZero.png";

const useStyles = makeStyles(theme => ({
  pointsTypographyColor: {
    color: "#48236a"
  }
}));

let pointsValue = 735;

export default function Overview_Points() {
  const classes = useStyles();

  return (
    <Grid item xs container direction="column" spacing={2}>
      <Typography className={classes.pointsTypographyColor} variant="h5" gutterBottom>
      735 Points
      </Typography>
      <Typography className={classes.pointsTypographyColor} variant="body1">
      <img src={levelZero} alt="Level Zero"></img>Your current Level : Newbie
      </Typography>
    </Grid>
  );
}
