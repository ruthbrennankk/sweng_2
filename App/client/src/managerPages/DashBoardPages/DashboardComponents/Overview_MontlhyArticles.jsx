import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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

let articlesNo = 657;
let articlesNoViews = 151;

let articlesCreatedThisPeriod = 20;
let ViewsInTotal = 54;
let problemsSolved = 0;
let problemsPartiallySolved = 0;
let mostTimeViewed = `23rd and 30th of January`;

const StyledButton = withStyles({
  root: {
    marginLeft: "170px",
    background: "linear-gradient(45deg, #5a2a83 30%, #9545d8 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default function Overview_ArticlesCreated() {
  const classes = useStyles();

  return (
    <Grid item xs container direction="column" spacing={2}>
      <Grid item xs container direction="row">
        <ArticleComponentsTypography
          className={classes.typographyColor}
          variant="h5"
          gutterBottom
        >
          {articlesNo} Monthhly Articles
        </ArticleComponentsTypography>
        <NavLink to to="/" style={{ textDecoration: "none" }}>
          <StyledButton>+ Details</StyledButton>
        </NavLink>
      </Grid>

      <Typography>
        Up {articlesCreatedThisPeriod} articles from last month
      </Typography>
      <Typography>Averaging {ViewsInTotal} articles per month</Typography>
      <Typography>Most popular area of expertises -</Typography>
      <PeriodTypography>
        Collaborate with a techical staff in TelcoMax
      </PeriodTypography>
      <div className={classes.part2}>
        <ArticleComponentsTypography
          className={classes.typographyColor}
          variant="h5"
          gutterBottom
        >
          151,330 Monthly Views
        </ArticleComponentsTypography>
        <Typography>
          {mostTimeViewed} were when the most amount of articles were viewed
        </Typography>
      </div>
    </Grid>
  );
}
