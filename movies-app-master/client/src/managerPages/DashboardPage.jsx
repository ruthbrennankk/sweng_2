import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import OverviewPage from "./DashBoardPages/OverviewPage.jsx";
import AppBar from "./components/AppBar.jsx";
import NoteTitleBar from "./components/NoteTitleBar.jsx";
import Tabs from "./components/Tabs.jsx";

import "./ProfilePage.css";

const componentsStyle = {
  display: "flex"
};

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <AppBar></AppBar>
        <Grid style={componentsStyle}>
          <Tabs></Tabs>
          <Grid style={{ flex: 1 }}>
            <NoteTitleBar />
            <OverviewPage> </OverviewPage>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default DashboardPage;
