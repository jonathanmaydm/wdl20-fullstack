import React, { Component } from "react";
import logo from "../images/communityBank.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <img src={logo} style={{ maxWidth: "100px" }} />
        <form>
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
      </div>
    );
  }
}

export default Login;
