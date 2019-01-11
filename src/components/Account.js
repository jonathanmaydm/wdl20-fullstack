import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../ducks/user";

class Account extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    if (!this.props.user.username) {
      return <h1>Error please login</h1>;
    }
    return <h1>{this.props.user.username} Account</h1>;
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getUser }
)(Account);
