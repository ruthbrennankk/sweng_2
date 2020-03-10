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
    password = this.state.id;
    
    


    const payload = {email};
    await apis.getUserByEmail(payload).then(res => {
      window.alert('Login Account attempt')
      this.setState({
        id: '',
        email: '',
        password: ''
        
      })
    })

    console.log('User signed in with this data:');
    console.log(this.state);
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
