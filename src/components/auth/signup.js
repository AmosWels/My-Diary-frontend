import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import { NotificationManager } from 'react-notifications';
import "react-notifications/lib/notifications.css";
import { baseurl } from "../../App";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      signedUp: false
    };
  }

    handleSignup = (e) =>{
      e.preventDefault();
      let password =  e.target.elements.password.value;
      let confirm_password = e.target.elements.psw_repeat.value;
      let url = baseurl + "/api/v1/auth/signup";
      if (password !== confirm_password){
        alert("Passwords dont match");
      } else{
        let user = {
          username: e.target.elements.username.value,
          password: password
        };
        axios.post(url, JSON.stringify(user), {
          headers: {"Content-Type": "application/json"}
        }).then(response => {
          alert("Success :" + response.data.Message);
          this.setState({signedUp: true});
        }).catch(error => {
          alert("Fail :" + error.response.data.Message);
        });
      }
    }

    render() { 
      if (this.state.signedUp) {
        return (<Redirect to=""/>);
      }
      return ( 
        <div>
          <h2 className="centered">Sign Up with My Diary</h2>
          <div  id="call"></div>
          <div className="container">
            <form id="register" method="POST" onSubmit={this.handleSignup}>
              <label htmlFor="username">
                <b>Username</b>
              </label>
              <input type="text" placeholder="Enter Username" name="username" id="username1" required />
              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input type="password" placeholder="Enter Password" name="password" id="password1" required />
              <label htmlFor="psw_repeat">
                <b>Repeat Password</b>
              </label>
              <input type="password" placeholder="Repeat Password" name="psw_repeat" id="password2" required />
              <hr/>
              <button type="submit" id="registerbutton">signup</button>
            </form>
          </div>

          <div className="container signin">
            <p>Already have an account?
              <a href="/">Sign in</a>.</p>
          </div>
        </div>
      );
    }
}
 
export default Signup;
