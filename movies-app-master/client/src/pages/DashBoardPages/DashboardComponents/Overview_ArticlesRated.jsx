import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  },
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  
}));

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    color: "#9545d8",
    height: 48,
    padding: "0 30px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

const articlesYouRated = `Articles you rated`;

export default function Overview_ArticlesRated() {
  const classes = useStyles();

  return (
    <Grid item xs container direction="column" spacing={2}>
      <Typography className={classes.typographyColor} variant="subtitle2">
        {articlesYouRated}
      </Typography>
      <div className={classes.root}>
        <StyledButton variant="outlined">+ Details</StyledButton>
      </div>
    </Grid>
  );
}
