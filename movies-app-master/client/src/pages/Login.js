import React, { useContext } from 'react';
import { AuthContext } from '../App';
import './SignInPage.css';
import apis from '../api';
import { NavLink } from 'react-router-dom';
import {AccountContext} from '../api/AcntContext';

var email ;
var password ;
var count = 0;
var stateCheck;
export const Login = () => {
   
   
        

    var logState;
    
    

    const handleInputChange = async (e)=> {
        
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        // console.log(name);
        // console.log(value);
        // console.log("Handle Change Data^");
        if(name == "email"){
            email = value;

        }else{
            password = value;
        }
    };
    
    const [ {user: initstate = { name: "test",
    email: "test",
    password: "test",
    isManagement: false,
    rank: [0,0,0,0],
    pointValue: [0,0,0,0],
    pointValue: [0,0,0,0],
    articlesCreated: [0],
    articlesViewed: [0],
    articleViews: [0],
    articlesLikes: [0],
    articleRelevanceRec: [0],
    articlesImpactRatingRec: [0],
    myArticlesLikes: [0],
    myArticlesImpactRec: [0] }}, setState] = useContext(AccountContext);
   const startState = { name: "test2",email: "test2",password: "test2",isManagement: false,rank: 0,pointValue: 0,};
    // if(count == 0){
    //     console.log("Should only see this once");
    //     setState(startState);

    // }
    count++;
   
   
  const HandleFormSubmit = async (event) => {
        event.preventDefault();

    
    var loginSuccess = false;
    var tempEmail = email;

    
    

     const payload = tempEmail;
    console.log(payload);
    await apis.getUserByEmail(payload).then(res => {
      window.alert('Login Account attempt')
      //checks if email is correct
      if(res.data.success === false){
        console.log("Email Incorrect Try Again");
        logState = false;
      }else{
        if(res.data.data.password === password){
          console.log("It works");
          loginSuccess = true;
          console.log(res.data.data.name + " Just Logged on Succesfully");
          console.log(res.data.data.name + " is Rank : "+res.data.data.rank);
        }else{
          console.log("Password incorrect.");
          loginSuccess = false;
        }
        var data = res.data.data;
        console.log('The User Account: ');
        console.log(res.data.data);
        setState(res.data.data);

      }

     // resets state of text boxs depending on outcome of login attempt
      if(loginSuccess){
        //  logState = true;
        //  stateCheck = true;
        //  console.log(initstate.name);
        //  email = "";
        //  password = ""; 
        }else{
            email = "";
            password = "";
        }
      
    }).catch(err => console.log(err));
    
    
      
      //password = "";
      
    
    //logState = false;
    console.log(initstate.name);
    console.log("Got Past it all");

    
    
    };

    return(
       
       
     

        <div className="App1">
            <div className="App__Left1">
                <div className="SignInPage">

                    <form onSubmit={HandleFormSubmit}>
                        <div className="SignInField">
                            <label className="SignIn__Label" htmlFor="email">
                                E-Mail Address</label>
                            <input
                                type="text"
                                className="SignIn__Input"
                                placeholder="Enter your email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="SignInField">
                            <label className="SignIn__Label" htmlFor="password">
                                Password</label>
                            <input
                                type="password"
                                id="password"
                                className="SignIn__Input"
                                placeholder="Enter your password"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>


                        <div className="SignInField">
                         

                            {count>2 ? (
                                console.log("Nav"),
                                    <NavLink to="/home"><button className="SignIn__Button mr-20">Sign In</button></NavLink>
                            ) : (
                                console.log("Not Nav"),
                                <button className="SignIn__Button mr-20">Sign In</button>
                            )}


                            




                        </div>
                    </form>

                </div>
            </div>
        </div>
 
    );
}
export default Login; 


/*
 <div className="App1">
      <div className="App__Left1">
      <div className = "SignInPage"> 
      
        <form onSubmit={this.handleSubmit}>
          <div className="SignInField">
            <label className="SignIn__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="SignIn__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className="SignInField">
            <label className="SignIn__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="SignIn__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
          </div>

          <div className="SignInField">
            <button className="SignIn__Button mr-20">Sign In</button>
          </div>
        </form>
      
      </div>
      </div>
      </div>
*/