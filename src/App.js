import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./components/Account";
import Signup from "./components/Signup";
import Login from "./components/Login";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/account" component={Account} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
