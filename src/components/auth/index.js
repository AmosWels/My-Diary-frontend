import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginView from "../../containers/auth/loginContainer";
import { loginAction } from "../../actions/auth/loginAction";
class Index extends Component {
  state = {
    username: "",
    password: ""
  };

  componentWillReceiveProps(nextprops) {
    if (nextprops.userdata.isLoggedIn) {
      localStorage.setItem("token", nextprops.userdata.user.token);
      window.location = "/entries";
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.dispatch(loginAction(data));
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <LoginView
          {...this.props}
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          username={username}
          password={password}
        />
      </div>
    );
  }
}
Index.propTypes = {
  dispatch: PropTypes.func,
  userdata: PropTypes.object
};
const mapDispatchToProps = dispatch => ({ dispatch });
const mapStateToProps = state => ({
  userdata: state.userLogin
});
export { Index as IndexTest };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
