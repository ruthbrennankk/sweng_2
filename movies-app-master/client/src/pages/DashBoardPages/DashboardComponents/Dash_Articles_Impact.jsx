import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//graphs
import Doughnut from "../../Graphs/Doughnut";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  },
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
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

const articlesYouRated = `How you rated the impact on articles you viewed`;

export default function Dash_Articles_Rated() {
  const classes = useStyles();

  return (
    <Grid item xs container direction="column" spacing={2}>
      <Typography className={classes.typographyColor} variant="subtitle2" gutterBottom>
        {articlesYouRated}
      </Typography>
      <Doughnut
        data={[65, 59, 80, 81]}
        labels={["Jan", "Feb", "March", "April"]}
        backgroundColor={[
          "#75bf53",
          "#fda54b",
          "#e35245",
          "#ffc400",
          "#d9d9d9"
        ]}
        hoverBackgroundColor={[
          "#539435",
          "#f2820f",
          "#c44a3f",
          "#e3b109",
          "#918e8e"
        ]}
        displayLegend={true}
      />
    </Grid>
  );
}
