import React from "react";
import { AuthContext } from '../App';
import './SignInPage.css';
import apis from '../api';
export const Login = () => {
    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null 
    };
    
    const [data, setData] = React.useState(initialState);
    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };
    
    const handleFormSubmit = event => {
        event.preventDefault();
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        });
        // fetch("http://localhost:3000/api/user",{
        //     method:"post",
        //     headers: {
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify({
        //         username: data.email,
        //         password: data.password
        //     })
        // })
       var payload = data.email;
        apis.getUserByEmail(payload)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            throw res;
        })
        .then(resJson => {
            if(data.password === resJson.data.password){
                dispatch({
                    type: "LOGIN",
                    payload: resJson
                })
                
                
            }
            
            
        })
        .catch(error => {
            setData({
                ...data,
                isSubmitting: false,
                errorMessage: error.message || error.statusText
            });
        });
    };

    return(
        <div className="App1">
            <div className="App__Left1">
                <div className="SignInPage">
                    <div className="login-container">
                        <div className="card">
                            <div className="container">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="SignInField">
                                        <label className="SignIn__Label" htmlFor="email">
                                            E-Mail Address</label>
                                        <input
                                            type="text"
                                            className="SignIn__Input"
                                            placeholder="Enter your email"
                                            name="email"
                                            id="email"
                                            value={data.email}
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
                                            value={data.password}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    {data.errorMessage && (
                                        <span className="form-error">{data.errorMessage}</span>
                                    )}

                                    <div className="SignInField">
                                        <button disabled={data.isSubmitting} className="SignIn__Button mr-20">
                                                {data.isSubmitting ? (
                                                "Loading..."
                                                     ) : (
                                                    "Login"
                                                )}

                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
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