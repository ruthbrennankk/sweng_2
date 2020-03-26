import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MenuList, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

import NavigationBar from "./components/NavigationBar.jsx";
import AppBar from "./components/AppBar.jsx";
import "./ProfilePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="ProfileDetails">Home Page </div>
      </div>
    );
  }
}
export default HomePage;
