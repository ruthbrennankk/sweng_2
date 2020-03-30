import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { MenuList, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage.jsx";
import SignInPage from "./pages/SignInPage.js";

import Login from './pages/Login.js';
import {AccountProvider, AccountContext} from './api/AcntContext';

import HomePage from "./pages/HomePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import ImpactPage from "./pages/DashBoardPages/ImpactPage.jsx";
import Dash_ArticlesPage from "./pages/DashBoardPages/Dash_ArticlesPage.jsx";
import Dash_ArticlesCreated from "./pages/DashBoardPages/DashboardComponents/Dash_ArticlesCreated.jsx";
import CompetenciesPage from "./pages/DashBoardPages/CompetenciesPage.jsx";

import HomePageManager from "./managerPages/HomePage.jsx";
import DashboardPageManager from "./managerPages/DashboardPage.jsx";
import ArticlesPageManager from "./managerPages/ArticlesPage.jsx";
import ProfilePageManager from "./managerPages/ProfilePage.jsx";
import SettingsPageManager from "./managerPages/SettingsPage.jsx";
import ImpactPageManager from "./managerPages/DashBoardPages/ImpactPage.jsx";
import Dash_ArticlesPageManager from "./managerPages/DashBoardPages/Dash_ArticlesPage.jsx";
import CompetenciesPageManager from "./managerPages/DashBoardPages/CompetenciesPage.jsx";
import RankingPageManager from "./managerPages/DashBoardPages/RankingPage.jsx";

//import './App.css';
/*export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      
    localStorage.setItem("user", JSON.stringify(action.payload.user));
    localStorage.setItem("token", JSON.stringify(action.payload.token));
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
      token: action.payload.token
    };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
      default:
        return state;

  }
};*/

export default function App() {
  const isUser = false;
  if (isUser) {
    return (
      <Router>
        <AccountContext.Provider>
        <Route exact path="/" component={WelcomePage}></Route>
        <Route exact path="/signin" component={Login}></Route>
        <Route exact path="/home" component={HomePage}></Route>
        <Route exact path="/dashboard" component={DashboardPage}></Route>
        <Route exact path="/articles" component={ArticlesPage}></Route>
        <Route exact path="/profile" component={ProfilePage}></Route>
        <Route exact path="/settings" component={SettingsPage}></Route>
        <Route exact path="/dashboard/impact" component={ImpactPage}></Route>
        <Route
          exact
          path="/dashboard/articles"
          component={Dash_ArticlesPage}
        ></Route>
        <Route
          exact
          path="/dashboard/competencies"
          component={CompetenciesPage}
        ></Route>
        <Route
          exact
          path="/dashboard/articlesCreated"
          component={Dash_ArticlesCreated}
        ></Route>
      </Router>
    );
  } else {
    return (
      <Router>
        <Route exact path="/" component={WelcomePage}></Route>
        <Route exact path="/signin" component={SignInPage}></Route>
        <Route exact path="/home" component={HomePageManager}></Route>
        <Route exact path="/dashboard" component={DashboardPageManager}></Route>
        <Route exact path="/articles" component={ArticlesPageManager}></Route>
        <Route exact path="/profile" component={ProfilePageManager}></Route>
        <Route exact path="/settings" component={SettingsPageManager}></Route>
        <Route exact path="/dashboard/impact" component={ImpactPageManager}></Route>
        <Route exact path="/dashboard/ranking" component={RankingPageManager}></Route>
        <Route
          exact
          path="/dashboard/articles"
          component={Dash_ArticlesPageManager}
        ></Route>
        <Route
          exact
          path="/dashboard/competencies"
          component={CompetenciesPageManager}
        ></Route>
      </Router>
    );
  }
}
