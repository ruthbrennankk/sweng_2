import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import Divider from "@material-ui/core/Divider";

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

const yourContribution = `Your contribution streak in the last 365 days`;

export default function Overview_Contribution() {
  const classes = useStyles();

  return (
    <Grid item xs>
      <Typography
        className={classes.typographyColor}
        variant="subtitle2"
        gutterBottom
      >
        {yourContribution}
      </Typography>
      <Grid
        container
        alignItems="stretch"
        className={classes.contributionOvertime}
      >
        
        <Typography className={classes.typographyColor} variant="body1">
          Year of contributions
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography className={classes.typographyColor} variant="body1">
          Longest Streak
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography className={classes.typographyColor} variant="body1">
          Current Streak
        </Typography>
      </Grid>
    </Grid>
  );
}
