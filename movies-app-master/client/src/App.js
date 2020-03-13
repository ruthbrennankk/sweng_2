import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage.jsx';
import SignInPage from './pages/SignInPage.js';
import UserContext from "./api/acnt-mang.js";


class App extends Component {
  render() {
    return (
      <Router>

          <Route exact path="/" component={WelcomePage}>
            </Route>
            <Route exact path="/signin" component={SignInPage}>
            </Route>

           
          
      </Router>
    );
  }
}

export default App;