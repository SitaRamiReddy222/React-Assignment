import React, { Component } from "react";
import "./App.css";
import OrderSummary from "./components/orderSummary/order";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route path="/" exact component={Profile} />
          <Route path="/profile" component={Profile} />
          <Route path="/orderSummary" component={OrderSummary} />
        </div>
      </Router>
    );
  }
}

export default App;
