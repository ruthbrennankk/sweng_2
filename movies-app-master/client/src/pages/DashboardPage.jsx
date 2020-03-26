import React, { Component } from "react";

import NavigationBar from "./components/NavigationBar.jsx";
import OverviewPage from "./DashBoardPages/OverviewPage.jsx";

import "./ProfilePage.css";

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <OverviewPage> </OverviewPage>
      </div>
    );
  }
}
export default DashboardPage;
