import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import BarChart from "../../Graphs/BarChart";
import {AccountContext} from "../../../api/AcntContext"

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  },
  contributionOvertime: {
    width: "fit-content",

    "& svg": {
      margin: theme.spacing(1.5)
    },
    "& hr": {
      margin: theme.spacing(0, 5)
    }
  }
}));

const articlesRated = `Articles Rated`;

export default function Overview_Contribution() {
  const [state, setState] = useContext(AccountContext);
  const classes = useStyles();
  var totalViews = 0;
  for(var i =0; i <4; i++){
    totalViews += state.user.articleViews[i];
  }
  console.log(totalViews);

  var graph = {
    data: [65, 59, 80, 81, 56, 300],
    labels: ["Jan", "Feb", "March", "April", "May", "June"]
  };
  return (
    <Grid item xs>
      <Typography
        className={classes.typographyColor}
        variant="subtitle2"
        gutterBottom
      >
        {articlesRated}
      </Typography>
      <BarChart
            displayLegend = {false} 
            data = {[totalViews, state.user.articlesLikes[0], state.user.articlesLikes[1], state.user.articlesLikes[2],state.user.articleRelevanceRec[1],state.user.articleRelevanceRec[0],state.user.articleRelevanceRec[2],state.user.articlesImpactRatingRec[0],state.user.articlesImpactRatingRec[1],state.user.articlesImpactRatingRec[2]]}
            labels={["Number or Articles you viewed","Number of articles you liked","Number of articles which you disliked","Like/dislike-not recorded","Number of articles to which you stated were irrelevant to your search query", "Number of articles to which you stated were relevant to your search query","Relevance - not recorded","Number of articles to solve your problem","Number of articles to not solve your problem","Number of articles to partially solve your problem" ]} 
            borderColour =  {"#9545d8"}
            xAxisLabel = {'Solution Seeker Input'}
            yAxisLabel = {'Articles Rated'}
            backgroundColour = {'#fda54b'}
        />
      <Grid
        container
        alignItems="stretch"
        className={classes.contributionOvertime}
      ></Grid>
    </Grid>
  );
}
