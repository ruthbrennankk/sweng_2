import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  }
}));

export default function Dash_ArticlesCreated_ListOfARticles() {
  const classes = useStyles();

  return (
    <Grid container direction="column" xs spacing={1}>
      <Grid container direction="row" xs spacing={1}>
        <Typography
          className={classes.typographyColor}
          variant="h6"
          gutterBottom
        >
          Your List or Articles
        </Typography>
        <div>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Search" />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}
