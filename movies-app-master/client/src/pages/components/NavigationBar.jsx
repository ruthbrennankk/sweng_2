import React, { Component } from "react";
import { MenuList, MenuItem } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import DashBoardOutlinedIcon from "@material-ui/icons/EqualizerOutlined";
import ArticleOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./AppBar.jsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { shadows } from "@material-ui/system";

import "./NavigationBar.css";

const drawerWidth = 60;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>

      <div>
        <Drawer
          
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <MenuList color="#ffffff">
            <MenuItem component={Link} to="/home">
              <ListItemIcon>
                <HomeOutlinedIcon className="NavigationIcons" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem component={Link} to="/dashboard">
              <ListItemIcon>
                <DashBoardOutlinedIcon className="NavigationIcons" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem component={Link} to="/articles">
              <ListItemIcon>
                <ArticleOutlinedIcon className="NavigationIcons" />
              </ListItemIcon>
            </MenuItem>
          </MenuList>
        </Drawer>
      </div>
    </div>
  );
}
