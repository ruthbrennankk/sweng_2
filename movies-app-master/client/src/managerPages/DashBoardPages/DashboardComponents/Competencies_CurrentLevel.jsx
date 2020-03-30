import React from "react";
import { NavLink } from "react-router-dom";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Button from "@material-ui/core/Button";

import BarChart from "../../Graphs/BarChart";

const useStyles = makeStyles({
  typographyColor: {
    color: "#48236a"
  }
});

const StyledButton = withStyles({
  root: {
    marginLeft: "170px",
    background: "linear-gradient(45deg, #5a2a83 30%, #9545d8 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 20px"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

export default function Competencies_CurrentLevel() {
  var graph = {
    data: [65, 59, 80, 81, 56, 300],
    labels: ["Jan", "Feb", "March", "April", "May", "June"]
  };
  const classes = useStyles();
  return (
    <Grid item xs container direction="row" spacing={2}>
      {/* first column */}
      {/* first column */}
      {/* first column */}
      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs container direction="row" spacing={2}>
          <Typography
            className={classes.typographyColor}
            variant="h6"
            gutterBottom
          >
            Number of articles to contain a specific expert area{" "}
          </Typography>
        </Grid>
        {/* continue code for first column here */}
        {/* continue code for first column here */}
        {/* continue code for first column here */}
        <BarChart
          displayLegend={false}
          data={[160, 39,39,39,39,39,38,38,37,37,37,36,36,36,36]}
          labels={["No Category", "Assist in the", "Decide on the type", "Establish", "Execute","Impart business","Collaborate in the","Collaborate to","Collaborate with a","Collaborate with","Collaborate on ", "Conduct routine","Apply safety","Develop a","Communicate"]}
          borderColour={"#fda54b"}
          xAxisLabel={"Number of articles to contain specific expert area"}
          yAxisLabel={"Expert Areas"}
          backgroundColour={"#4285f4"}
        />
        <NavLink to to="/" style={{ textDecoration: "none" }}>
          <StyledButton>+ Load More</StyledButton>
        </NavLink>
      </Grid>

      {/* second column */}
      {/* second column */}
      {/* second column */}

      <Grid item xs container direction="column" spacing={2}>
        <Grid item xs container direction="row" spacing={2}>
          <Typography
            className={classes.typographyColor}
            variant="h6"
            gutterBottom
          >
            Compentancies for
          </Typography>
        </Grid>
        {/* continue code for second column here */}
        {/* continue code for second column here */}
        {/* continue code for second column here */}
        <BarChart
          displayLegend={false}
          data={[16500, 13500, 9000, 8100, 8000, 6400]}
          labels={["Bradford Hamilton", "Muirin Micheal", "Emory Mcfee", "Rhett Banks","Clem MacQueen","Luvinia Carmody"]}
          borderColour={"#fda54b"}
          xAxisLabel={"Points"}
          yAxisLabel={"Name"}
          backgroundColour={"#5a2a83"}
        />
      </Grid>
    </Grid>
  );
}
