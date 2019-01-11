import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import logo from "../images/communityBank.svg";
import { login } from "../ducks/user";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    console.log(this.props.user);
    if (this.props.user.username) {
      return <Redirect push to="/account" />;
    }
    return (
      <div>
        <img src={logo} style={{ maxWidth: "100px" }} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            placeholder="Username"
          />
          <input
            onChange={this.handleChange}
            value={this.state.password}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button>Login</button>
        </form>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { login: login }
)(Login);
