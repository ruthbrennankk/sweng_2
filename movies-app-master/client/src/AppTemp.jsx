import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { MenuList, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

import WelcomePage from "./managerPages/WelcomePage.jsx";
import SignInPage from "./managerPages/SignInPage.js";

//import Login from './pages/Login.js';
//import UserContext from "./api/acnt-mang.js";

import HomePage from "./managerPages/HomePage.jsx";
import DashboardPage from "./managerPages/DashboardPage.jsx";
import ArticlesPage from "./managerPages/ArticlesPage.jsx";
import ProfilePage from "./managerPages/ProfilePage.jsx";
import SettingsPage from "./managerPages/SettingsPage.jsx";
import ImpactPage from "./managerPages/DashBoardPages/ImpactPage.jsx";
import Dash_ArticlesPage from "./managerPages/DashBoardPages/Dash_ArticlesPage.jsx";
import CompetenciesPage from "./managerPages/DashBoardPages/CompetenciesPage.jsx";
import RankingPage from "./managerPages/DashBoardPages/RankingPage.jsx";

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
  const isManager = true;
  
  return (
    
    <Router>
      <Route exact path="/" component={WelcomePage}></Route>
      <Route exact path="/signin" component={SignInPage}></Route>
      <Route exact path="/home" component={HomePage}></Route>
      <Route exact path="/dashboard" component={DashboardPage}></Route>
      <Route exact path="/articles" component={ArticlesPage}></Route>
      <Route exact path="/profile" component={ProfilePage}></Route>
      <Route exact path="/settings" component={SettingsPage}></Route>
      <Route exact path="/dashboard/impact" component={ImpactPage}></Route>
      <Route exact path="/dashboard/ranking" component={RankingPage}></Route>
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
    </Router>
  );
}