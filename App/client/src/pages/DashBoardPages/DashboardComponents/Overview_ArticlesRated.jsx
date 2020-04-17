import React, { useState,useContext } from "react";
import ReactDOM from "react-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {AccountContext} from "../../../api/AcntContext";

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
    //hardcoded code
    marginLeft: "400px",
    background: "linear-gradient(45deg, #5a2a83 30%, #9545d8 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 35,
    padding: "0 20px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

const articlesYouRated = `Articles you rated`;

export default function Overview_ArticlesRated() {
  const [state, setState] = useContext(AccountContext);
  const classes = useStyles();

  return (
    <Grid item xs container direction="column" spacing={2}>
      <Grid item xs container direction="row" spacing={2}>
        <Typography className={classes.typographyColor} variant="subtitle2">
          {articlesYouRated}
        </Typography>
        <StyledButton>+ Details</StyledButton>
      </Grid>
      <Doughnut
         data={[state.user.articlesImpactRatingRec[0],state.user.articlesImpactRatingRec[1],state.user.articlesImpactRatingRec[2],11]}
         labels={["Solved your problem", "Didn't solve your problem", "Partial solution to your problem", "Impact - not recorded"]}
         backgroundColor={[
           "#75bf53",
           "#fda54b",
           "#e35245",
           "#d9d9d9",
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
