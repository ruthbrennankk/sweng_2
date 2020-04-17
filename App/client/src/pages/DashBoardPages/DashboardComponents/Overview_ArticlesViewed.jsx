import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {AccountContext} from "../../../api/AcntContext";

const useStyles = makeStyles(theme => ({
  typographyColor: {
    color: "#48236a"
  }
}));

let articlesNo = 53;

export default function Overview_ArticlesViewed() {
  const [state, setState] = useContext(AccountContext);
  const classes = useStyles();

  return (
    <Grid item xs container direction="column" spacing={2}>
      <Typography className={classes.typographyColor} variant="subtitle2" gutterBottom>
      Articles rated by you
      </Typography>

      <Divider />
      <Typography className={classes.typographyColor} variant="h5" gutterBottom>
        {state.user.articleViews[3]} Articles viewed
      </Typography>
    </Grid>
  );
}
