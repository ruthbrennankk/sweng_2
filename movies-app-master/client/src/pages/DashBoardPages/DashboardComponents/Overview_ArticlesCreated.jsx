import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  }
}));

let articlesNo = 0;

let articlesCreatedThisPeriod = 0;
let ViewsInTotal = 0;
let problemsSolved = 0;
let problemsPartiallySolved = 0;

export default function Overview_ArticlesCreated() {
  const classes = useStyles();

  return (
    <Grid item xs container direction="column" spacing={2}>
      <Typography className={classes.typographyColor} variant="subtitle2" gutterBottom>
      Articles created by you
      </Typography>
      <Divider />
      <Typography className={classes.typographyColor} variant="h5" gutterBottom>
        {articlesNo} Articles Created
      </Typography>
      <Typography variant="caption">
        {articlesCreatedThisPeriod} created this month
      </Typography>
      <Typography variant="caption">{ViewsInTotal} views in total</Typography>
      <Typography variant="caption">
        {problemsSolved} problems solved
      </Typography>
      <Typography variant="caption">{problemsPartiallySolved} problems partially solved</Typography>
    </Grid>
  );
}
