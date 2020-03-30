import React from "react";
import {
  fade,
  makeStyles,
  responsiveFontSizes
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { createMuiTheme } from "@material-ui/core/styles";
import CalendarIcon from "@material-ui/icons/CalendarTodayOutlined";
import { Typography } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    marginLeft: "auto",
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    fontFamily: "Calibri",
    fontWeight: 700,
    color: "#9545D8",
    fontSize: 13
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  }
}));

const breadcrumbStyle = {
  marginLeft: 300
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "white"
    },
    background: {
      default: "#394764"
    }
  }
});

const dividerStyles = {
  marginTop: 10,
  height: 30
};

const style = {
  background: "#EBEAFA"
};

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={style}>
        <Toolbar variant="dense">
          <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
            <Button color="primary">Overview</Button>
          </NavLink>
          <Divider orientation="vertical" flexItem style={dividerStyles} />
          <NavLink to="/dashboard/impact" style={{ textDecoration: "none" }}>
            <Button color="primary">Impact</Button>
          </NavLink>
          <Divider orientation="vertical" flexItem style={dividerStyles} />
          <NavLink to="/dashboard/articles" style={{ textDecoration: "none" }}>
            <Button color="primary">Articles</Button>
          </NavLink>
          <Divider orientation="vertical" flexItem style={dividerStyles} />
          <NavLink to="/dashboard/ranking" style={{ textDecoration: "none" }}>
            <Button color="primary">Ranking</Button>
          </NavLink>
          <Divider orientation="vertical" flexItem style={dividerStyles} />
          <NavLink
            to="/dashboard/competencies"
            style={{ textDecoration: "none" }}
          >
            <Button color="primary">Competencies</Button>
          </NavLink>

          <Breadcrumbs aria-label="breadcrumb" style={breadcrumbStyle}>
            <Link color="inherit" href="/" onClick={handleClick}>
              {" "}
              Daily
            </Link>
            <Link color="inherit" onClick={handleClick}>
              Weekly
            </Link>
            <Typography color="textPrimary">Monthly</Typography>
          </Breadcrumbs>

          <Typography variant="h6" className={classes.title}>
            April 2020
          </Typography>
          <CalendarIcon style={{ color: "#9545d8", fontSize: 18 }} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
