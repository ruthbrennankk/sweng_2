import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  },
  part2: {
    marginTop: theme.spacing(5)
  }
}));

const ArticleComponentsTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "2rem"
});

const PeriodTypography = styled(Typography)({
  fontSize: "1rem",
  fontWeight: "bold"
});

let usersNo = 0;

let articlesCreatedThisPeriod = 0;
let ViewsInTotal = 0;
let problemsSolved = 0;
let problemsPartiallySolved = 0;
let mostTimeViewed = `23rd and 30th of January`;

export default function Overview_MonthlyViews() {
  const classes = useStyles();

  return (
    <Grid item xs container direction="column" spacing={2}>
      <ArticleComponentsTypography
        className={classes.typographyColor}
        variant="h5"
        gutterBottom
      >
        {usersNo} Active Users
      </ArticleComponentsTypography>
      <Typography>
        Down {articlesCreatedThisPeriod} users from last month
      </Typography>
      <Typography>Averaging {ViewsInTotal} new articles per month</Typography>
      <Typography>Most popular area of expertises -</Typography>
      <PeriodTypography>
        Collaborate with a techical staff in TelcoMax
      </PeriodTypography>
      <Typography> {usersNo} have achived level 10 this month</Typography>
      <Typography> Down {usersNo} users from last month</Typography>
      <div className={classes.part2}>
        <ArticleComponentsTypography
          className={classes.typographyColor}
          variant="h5"
          gutterBottom
        >
          {usersNo} Inactive Users
        </ArticleComponentsTypography>
      </div>
    </Grid>
  );
}
