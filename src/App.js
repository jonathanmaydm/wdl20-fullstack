import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Account from "./components/Account";
import Signup from "./components/Signup";
import Login from "./components/Login";
import store from "./store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/account" component={Account} />
            <Route path="/signup" component={Signup} />
            <Route path="/" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
