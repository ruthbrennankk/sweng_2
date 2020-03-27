import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage.jsx';
import SignInPage from './pages/SignInPage.js';
/*import Login from './pages/Login.js';
//import UserContext from "./api/acnt-mang.js";

//import './App.css';
export const AuthContext = React.createContext();
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

class App extends Component {
 // function App(){
  //const [state, dispatch] = React.useReducer(reducer, initialState);
  render() {
    return (
      <Router>

        {/* <AuthContext.Provider
          value={{
          state,
          dispatch
          }}
        >
           */}



        <div className="App">{/*!state.isAuthenticated ? <Login/> : <WelcomePage/>*/}
          <div className="App__Left">
            
           <Route exact path="/" component={WelcomePage}>
            </Route>
            <Route exact path="/signin" component={SignInPage}>
            </Route> 
            
            
          </div>
        </div>
      {/* </Router>  </AuthContext.Provider> */}
           
          
      </Router>
    );
  }
}

export default App;