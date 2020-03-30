import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

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
        {/* <Divider orientation="vertical" flexItem />
        <Typography
          className={classes.typographyColor}
          variant="subtitle2"
          gutterBottom
        >
          Sample text
        </Typography> */}
      </Grid>
    </Grid>
  );
}
