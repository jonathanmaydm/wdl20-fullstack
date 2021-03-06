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
            <Route path="/account" exact component={Account} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/" exact component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
