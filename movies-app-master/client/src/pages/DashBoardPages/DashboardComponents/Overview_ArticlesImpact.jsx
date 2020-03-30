import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NoImpact from "./Impact_NoImpactCard.jsx";
import Impact from "./Impact_ImpactCard.jsx";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  }
}));

const impactOfArticles = `Impact of articles created by you`;

export default function Overview_ArticlesImpact() {
  const isImpact = false;
  const classes = useStyles();

  return (
    <Grid item xs container direction="column" spacing={2}>
      <Typography className={classes.typographyColor} variant="subtitle2">
        {impactOfArticles}
      </Typography>
      {isImpact ? <Impact /> : <NoImpact />}
    </Grid>
  );
}
