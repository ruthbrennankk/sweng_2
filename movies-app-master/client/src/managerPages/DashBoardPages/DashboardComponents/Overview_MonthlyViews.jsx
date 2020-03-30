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

let usersNo = 153;

let articlesCreatedThisPeriod = 2;
let ViewsInTotal = 1.3;
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
      <Typography> 14 have achived level 10 this month</Typography>
      <Typography> Down {5} users from last month</Typography>
      <div className={classes.part2}>
        <ArticleComponentsTypography
          className={classes.typographyColor}
          variant="h5"
          gutterBottom
        >
          {23} Inactive Users
        </ArticleComponentsTypography>
      </div>
    </Grid>
  );
}
