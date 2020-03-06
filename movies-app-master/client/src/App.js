import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage.jsx';
import SignInPage from './pages/SignInPage.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Left">
          <Route exact path="/" component={WelcomePage}>
            </Route>
            <Route exact path="/signin" component={SignInPage}>
            </Route>
          </div>
        </div>
           
          
      </Router>
    );
  }
}

export default App;