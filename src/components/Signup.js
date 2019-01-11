import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../images/communityBank.svg";
import { signup } from "../ducks/user";

class Signup extends Component {
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
    this.props.signup(this.state.username, this.state.password);
  }

  render() {
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
          <button>Signup</button>
        </form>
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
  { signup: signup }
)(Signup);
