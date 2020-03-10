import React, { Component } from 'react';
import apis from '../api';

class SignInPage extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      email: '',
      password: ''
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

   

  handleSubmit = async (e) => {
    e.preventDefault();
    var email = '';
    email = this.state.email;
    var password = '';
    password = this.state.password;
    var result;
    var loginSuccess = false;
    
    


    const payload = email;
    await apis.getUserByEmail(payload).then(res => {
      window.alert('Login Account attempt')
      //checks if email is correct
      if(res.data.success === false){
        console.log("Email Incorrect Try Again");
        //window.alert('Email Incorect');
        loginSuccess = false;
      }else{
        //console.log(this.state);
        //console.log(res.data.data.name);
        //console.log(res.data.data.password);
        //console.log(this.state.password);
        if(res.data.data.password === this.state.password){
          console.log("It works");
          loginSuccess = true;
          console.log(res.data.data.name + " Just Logged on Succesfully");
          console.log(res.data.data.name + " is Rank : "+res.data.data.rank);
        }else{
          console.log("Password incorrect.");
          loginSuccess = false;
        }
        console.log('The User Account: ');
        console.log(res.data.data);

      }
     // resets state of text boxs depending on outcome of login attempt
      if(loginSuccess){
        this.setState({
          id: '',
          email: '',
          password: ''
          
        })

      }else if(!loginSuccess && res.data.success === false){
        this.setState({
          id: '',
          email: '',
          password: ''
          
        })
      }else{
        this.setState({
          id: '',
          password: ''
          
        })
      }
      
    })

    
    //console.log(this.state);
  }
  

  render() {
    return (
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
    );
  }
  
}
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default SignInPage;
