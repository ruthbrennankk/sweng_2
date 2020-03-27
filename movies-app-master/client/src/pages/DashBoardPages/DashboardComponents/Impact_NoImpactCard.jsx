import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    width: 400
  },
  GridRoot: {
    marginTop: 60
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" className={classes.GridRoot}>
        <Card className={classes.root}>
          <CardActionArea >
            <SentimentVeryDissatisfiedIcon
              style={{ fontSize: 100, color: "#9d8fbb" }}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                You have not created any articles
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
}
