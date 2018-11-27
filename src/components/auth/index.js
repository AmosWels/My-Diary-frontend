import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../../static/style1.css';

class Index extends Component {
  // state = {  }
  handleLogin=(event) => {
      event.preventDefault();
      return (<Redirect to="/user/entries"/>);

      // console.log("You clicked login");
      // console.log(event.target.elements.psw.value);
      // console.log(event.target.elements.unamee.value);
    
  };
  render() {
      return (
          <div>
              <h2 className="centered">Login To Diario</h2>
              <div id="call" />
              <div className="container">
                  <form id="userlogin" method="POST" onSubmit={this.handleLogin}>
                      <label htmlFor="unamee">
                          <b>Username</b>
                      </label>
                      <input
                          type="text"
                          placeholder="Enter Username"
                          name="unamee"
                          id="uname"
                          required
                      />
                      <label htmlFor="psw">
                          <b>Password</b>
                      </label>
                      <input
                          type="password"
                          placeholder="Enter Password"
                          name="psw"
                          id="upassword"
                          required
                      />
                      <a href="/user/entries">Login</a>
                      {/* <button type="submit" id="loginbutton">
                Login
              </button> */}
                  </form>
                  <label>
                      <input type="checkbox" name="remember" /> Remember me ||
                      <span className="signup">
                          <a href="auth/signup">SignUp?</a>
                      </span>
                  </label>
              </div>
          </div>
      );
  }
}

export default Index;