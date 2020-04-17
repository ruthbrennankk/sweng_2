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
var initstate;
var loginState = false;
export default function Login () {
   
   
        

    var logState;
    
    

    const handleInputChange = async (e)=> {
        
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
       
        if(name == "email"){
            email = value;

        }else{
            password = value;
        }
    };
  
    count++;
   
    var data;
    const [state, setState] = useContext(AccountContext);
  const HandleFormSubmit = async (event) => {
        event.preventDefault();

    
    var loginSuccess = false;
    var tempEmail = email;
    

    
    

     const payload = tempEmail;
    console.log(payload);
    await apis.getUserByEmail(payload).then(res => {
      //window.alert('Login Account attempt')
      //checks if email is correct
      if(res.data.success === false){
        console.log("Email Incorrect Try Again");
        logState = false;
      }else{
        if(res.data.data.password === password){
          loginSuccess = true;
          console.log(res.data.data.name + " Just Logged on Succesfully");
          console.log(res.data.data.name + " is Rank : "+res.data.data.rank);
        }else{
          console.log("Password incorrect.");
          loginSuccess = false;
        }
        data = res.data.data;
        console.log('The User Account: ');
        console.log(res.data.data);
        
   

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
        loginState = loginSuccess;
      
    }).catch(err => console.log(err));
   
    
    
      
      //password = "";
      
    

    console.log("Got Past it all");
    console.log(loginState);
    console.log(data);
    console.log(state.user);

    state.user = data;
    //setState({data});
    console.log("Welcome " + state.user.name);
    
    
   
    };
    //setState(data);
    

    return(
        // <AccountContext.Provider>
        
       
       
     

        <div className="SignInApp">
            <div className="SignInApp__Left">
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

                        
                         
                            {/* Due to issues with Navlink, for demo purposes login is disabled, functionally it works however when navlink is active it skips over the validation code*/}
                            {/* Change != to == to show different users logging in, however manual url navigation will be required */}
                            {loginState != true ? (
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

      
        // </AccountContext.Provider>
 
    );
}



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