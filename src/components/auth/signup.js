import React, { Component } from "react";
import { connect } from "react-redux";
import SignUpView from "../../containers/auth/signupContainer";
import PropTypes from "prop-types";
import { signupAction } from "../../actions/auth/signupAction";
import { toast } from "react-toastify";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    confirm_password: ""
  };

  componentWillReceiveProps(nextprops) {
    if (nextprops.user.user.Message === "Created Succesfully") {
      nextprops.history.push("/");
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignup = e => {
    e.preventDefault();
    if (this.state.password !== this.state.confirm_password) {
      toast.warn("Passwords Dont match", {
        autoClose: 4000,
        hideProgressBar: true
      });
    } else {
      const data = {
        username: this.state.username,
        password: this.state.password
      };
      this.props.dispatch(signupAction(data));
    }
  };

  render() {
    const { username, password, confirm_password } = this.state;
    return (
      <div>
        <SignUpView
          {...this.props}
          handleChange={this.handleChange}
          handleSignup={this.handleSignup}
          username={username}
          password={password}
          confirm_password={confirm_password}
        />
      </div>
    );
  }
}
Signup.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object
};
const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
  user: state.userSignUp
});
export {Signup as SignupTest};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
