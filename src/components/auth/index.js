import React, { Component } from "react";
import { Redirect} from "react-router-dom";
import LoginView from "../../containers/auth/loginContainer";
class Index extends Component {
  handleLogin = event => {
    event.preventDefault();
    return <Redirect to="/user/entries" />;
  };
  render() {
    return (
      <div>
        <LoginView />
      </div>
    );
  }
}

export default Index;
