import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import BarChart from "../../Graphs/BarChart";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  }
}));

const ArticleComponentsTypography = styled(Typography)({
  color: "#5a2a83",
  fontSize: "2rem"
});

const StyledButton = withStyles({
  root: {
      //extremely hardcoded code
    marginLeft: "840px",
    background: "linear-gradient(45deg, #5a2a83 30%, #9545d8 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 20px",
    marginBottom: "50px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default function Ranking_RankingContributors() {
  const classes = useStyles();
  var graph = {
    data: [65, 59, 80, 81, 56, 300],
    labels: ["Jan", "Feb", "March", "April", "May", "June"]
  };

  return (
    <Grid container direction="column" xs spacing={1}>
      <Grid item xs container direction="row" spacing={2}>
        <Typography
          className={classes.typographyColor}
          variant="h6"
          gutterBottom
        >
          Top 10 - Ranking of Contributors
        </Typography>

        <NavLink to to="/" style={{ textDecoration: "none" }}>
          <StyledButton>
            <VisibilityOutlinedIcon /> View Full List
          </StyledButton>
        </NavLink>
      </Grid>

      <BarChart
        displayLegend={false}
        data={[65, 59, 80, 81]}
        labels={["Jan", "Feb", "March", "April"]}
        borderColour={"#fda54b"}
        xAxisLabel={"Date"}
        yAxisLabel={"Level and Points"}
        backgroundColour={"#fda54b"}
      />
    </Grid>
  );
}
